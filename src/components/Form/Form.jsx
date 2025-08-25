import React, { useCallback, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import classNames from 'classnames/bind';
import styles from './Form.module.scss';
import { registerUser } from '../../services/portfolio.service';
import { FiX } from 'react-icons/fi';

const cx = classNames.bind(styles);

const schema = yup.object({
  fullName: yup.string().required('Họ và tên là bắt buộc'),
  email: yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
  phone: yup
    .string()
    .matches(/^\d{9,11}$/g, 'Số điện thoại 9-11 số')
    .required('Số điện thoại là bắt buộc'),
  gpa: yup
    .number()
    .typeError('GPA phải là số')
    .min(0, 'GPA từ 0-4')
    .max(4, 'GPA từ 0-4')
    .required('GPA là bắt buộc'),
  position: yup.string().required('Vui lòng chọn vị trí'),
  motivation: yup
    .string()
    .max(1000, 'Tối đa 1000 ký tự')
    .required('Vui lòng chia sẻ đôi lời'),
  cv: yup
    .mixed()
    .required('Vui lòng tải lên CV (PDF)')
    .test('fileType', 'Chỉ chấp nhận PDF', (value) => {
      if (!value) return false;
      const file = Array.isArray(value) ? value[0] : value;
      return file && file.type === 'application/pdf';
    })
    .test('fileSize', 'Tối đa 5MB', (value) => {
      if (!value) return false;
      const file = Array.isArray(value) ? value[0] : value;
      return file && file.size <= 5 * 1024 * 1024;
    }),
}).required();

export default function Form({ onClose }) {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');
  const inputRef = useRef(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const cvFile = watch('cv');

  const onDrop = useCallback(
    (e) => {
      e.preventDefault();
      const file = e.dataTransfer.files?.[0];
      if (file) {
        setValue('cv', file, { shouldValidate: true });
      }
    },
    [setValue]
  );

  const onFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) setValue('cv', file, { shouldValidate: true });
  };

  const onSubmit = async (values) => {
    try {
      setSubmitting(true);
      setServerError('');

      const payload = {
        fullName: values.fullName,
        email: values.email,
        phone: values.phone,
        gpa: values.gpa,
        position: values.position,
        motivation: values.motivation,
        cv: values.cv,
      };

      await registerUser(payload);
      reset();
      if (onClose) onClose();
      alert('Đã gửi đơn ứng tuyển thành công!');
    } catch (err) {
      setServerError(err?.message || 'Đã xảy ra lỗi');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={cx('modalOverlay')} onClick={onClose}>
      <div className={cx('modal')} onClick={(e) => e.stopPropagation()}>
        <div className={cx('header')}>
          <h3 className={cx('title')}>ĐĂNG KÝ THAM GIA</h3>
          <button className={cx('closeBtn')} onClick={onClose}>
            <FiX />
          </button>
        </div>
        <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
          <div className={cx('grid')}> 
            <div className={cx('field')}>
              <label>Họ và tên *</label>
              <input placeholder="Nguyễn Văn A" {...register('fullName')} />
              {errors.fullName && <p className={cx('error')}>{errors.fullName.message}</p>}
            </div>

            <div className={cx('field')}>
              <label>Email *</label>
              <input placeholder="email@example.com" {...register('email')} />
              {errors.email && <p className={cx('error')}>{errors.email.message}</p>}
            </div>

            <div className={cx('field')}>
              <label>Số điện thoại *</label>
              <input placeholder="0901234567" {...register('phone')} />
              {errors.phone && <p className={cx('error')}>{errors.phone.message}</p>}
            </div>

            <div className={cx('field')}>
              <label>GPA hiện tại của bạn là bao nhiêu? *</label>
              <input placeholder="3.50" {...register('gpa')} />
              {errors.gpa && <p className={cx('error')}>{errors.gpa.message}</p>}
            </div>

            <div className={cx('field')}>
              <label>Bạn muốn ứng tuyển vào vị trí nào? *</label>
              <select defaultValue="" {...register('position')}>
                <option value="" disabled>Chọn vị trí ứng tuyển</option>
                <option value="frontend">Frontend Intern</option>
                <option value="backend">Backend Intern</option>
                <option value="ai">AI/ML Intern</option>
                <option value="data">Data Intern</option>
              </select>
              {errors.position && <p className={cx('error')}>{errors.position.message}</p>}
            </div>
          </div>

          <div className={cx('field')}>
            <label>Chia sẻ về bản thân và động lực tham gia *</label>
            <textarea rows={5} placeholder="Ví dụ: Kinh nghiệm lập trình, dự án đã làm, lý do muốn tham gia..." {...register('motivation')} />
            {errors.motivation && <p className={cx('error')}>{errors.motivation.message}</p>}
          </div>
          <div className={cx('field')}>
            <label>Upload CV của bạn</label>
          <div
            className={cx('dropzone')}
            onDragOver={(e) => e.preventDefault()}
            onDrop={onDrop}
          > 
            <input
              ref={inputRef}
              type="file"
              accept="application/pdf"
              className={cx('hiddenInput')}
              onChange={onFileChange}
            />
            <div className={cx('dropzoneContent')}>
              <div className={cx('uploadIcon')}>⬆</div>
              <p>Kéo thả file PDF vào đây hoặc <button type="button" className={cx('linkBtn')} onClick={() => inputRef.current?.click()}>chọn file</button></p>
              <p className={cx('hint')}>Chỉ chấp nhận file PDF, tối đa 5MB</p>
              {cvFile && (
                <div className={cx('fileInfo')}>
                  {(Array.isArray(cvFile) ? cvFile[0] : cvFile)?.name}
                </div>
              )}
              {errors.cv && <p className={cx('error')}>{errors.cv.message}</p>}
            </div>
          </div>
          </div>
          {serverError && <div className={cx('serverError')}>{serverError}</div>}

          <div className={cx('actions')}>
            <button type="button" className={cx('btnSecondary')} onClick={onClose}>Hủy</button>
            <button type="submit" className={cx('btnPrimary')} disabled={submitting}>
              {submitting ? 'Đang gửi...' : 'Gửi đơn ứng tuyển'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


