import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiTrendingUp, 
  FiUsers, 
  FiTarget, 
  FiCheckCircle, 
  FiArrowRight,
  FiPlay,
  FiStar,
  FiClock,
  FiBookOpen,
  FiAward,
  FiZap
} from 'react-icons/fi';
import { LuBrainCircuit, LuGraduationCap } from 'react-icons/lu';
import styles from './NinjaAI.module.scss';
import Form from '../../components/Form/Form';

const cx = classNames.bind(styles);

const NinjaAI = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: <FiCode />,
      title: 'Lập trình AI/ML',
      desc: 'Thành thạo Python, TensorFlow, PyTorch và các framework AI hiện đại'
    },
    {
      icon: <LuBrainCircuit />,
      title: 'Machine Learning',
      desc: 'Xây dựng và triển khai các mô hình ML từ cơ bản đến nâng cao'
    },
    {
      icon: <FiTrendingUp />,
      title: 'Data Science',
      desc: 'Phân tích dữ liệu, visualization và predictive analytics'
    }
  ];

  const curriculum = [
    {
      phase: 'Học thử & Định hướng',
      duration: '2 tuần',
      topics: ['Python Programming', 'Mathematics for ML', 'Data Structures', 'Basic Statistics'],
      desc: 'Thực tập sinh tham gia trải nghiệm miễn phí: làm quen quy trình Agile, GitHub, xây dựng portfolio cá nhân, tạo chatbot AI cơ bản với React.js + API. Được mentor hỗ trợ và đánh giá định kỳ.',
      icon: <FiBookOpen />
    },
    {
      phase: 'Thực chiến Frontend',
      duration: '2 tuần',
      topics: ['Supervised Learning', 'Unsupervised Learning', 'Neural Networks', 'Deep Learning'],
      icon: <LuBrainCircuit />,
      desc: 'Tập trung xây dựng giao diện web chuẩn UX/UI bằng React.js, TailwindCSS. Học làm việc nhóm qua dự án: landing page, hệ thống quản lý thực tập sinh. Tiếp cận kiến thức responsive design, Git nâng cao và animation.',
    },
    {
      phase: 'Backend & Tư duy AI',
      duration: '1 tháng',
      topics: ['Computer Vision', 'NLP', 'Reinforcement Learning', 'MLOps'],
      icon: <FiZap />,
      desc: 'Làm việc với Supabase, Firebase hoặc FastAPI, thiết kế API và xây dựng hệ thống CMS/CRM. Học cách tích hợp AI: phân tích ngôn ngữ (NLP), tạo chatbot đa nhiệm, sử dụng API Gemini và prompt engineering.',
    },
    {
      phase: 'Dự án cuối kỳ & Kết nối doanh nghiệp',
      duration: '1 tháng',
      topics: ['Real-world Projects', 'Portfolio Building', 'Interview Prep', 'Career Guidance'],
      icon: <FiTarget />,
      desc: 'Thực hiện capstone project (AI/CRM/Chatbot/ERP) có mentor hướng dẫn. Được review, demo, ghi nhận đóng góp theo mô hình "cổ phần hóa nhân lực". Kết nối doanh nghiệp hàng đầu trong nước và quốc tế như Nhật Bản & CHLB Đức, hỗ trợ chuẩn bị hồ sơ/phỏng vấn.',
    }
  ];

  const testimonials = [
    {
      name: 'Nguyễn Văn A',
      role: 'Software Engineer',
      company: 'TechCorp',
      content: 'Chương trình Ninja AI đã giúp tôi chuyển từ web dev sang AI engineer trong 6 tháng.',
      rating: 5
    },
    {
      name: 'Trần Thị B',
      role: 'Data Scientist',
      company: 'DataLab',
      content: 'Kiến thức thực tế và dự án hands-on giúp tôi tự tin apply vào các công ty AI hàng đầu.',
      rating: 5
    },
    {
      name: 'Lê Văn C',
      role: 'ML Engineer',
      company: 'AI Startup',
      content: 'Mentorship từ các chuyên gia và cộng đồng học viên rất supportive và motivating.',
      rating: 5
    }
  ];

  const stats = [
    { number: '3m', label: 'intensive' },
    { number: '100%', label: ' Improve your skill & mindset' },
    { number: '50+', label: ' Hands-on projects' },
    { number: '20+', label: 'Chuyên gia mentor' }
  ];

  const [openForm, setOpenForm] = useState(false);

  return (
    <div className={cx('ninjaAI')}>
      {/* Hero Section */}
      <section className={cx('hero')}>
        <div className={cx('container')}>
          <motion.div 
            className={cx('heroContent')}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={cx('heroTitle')}>
            Chương trình Thực tập sinh <span className={cx('accent')}>Ninja AI</span>
            </h1>
            <p className={cx('heroSubtitle')}>
            Chương trình thực tập sinh chuyên sâu 3 tháng, biến những người đam mê công nghệ thành những ninja AI với kỹ năng thực chiến.
            </p>
            <div className={cx('heroStats')}>
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className={cx('statItem')}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <div className={cx('statNumber')}>{stat.number}</div>
                  <div className={cx('statLabel')}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <div className={cx('heroActions')}>
              <motion.button 
                className={cx('ctaPrimary')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setOpenForm(true)}
              >
                Đăng ký ngay <FiArrowRight />
              </motion.button>
              <motion.button 
                className={cx('ctaSecondary')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiPlay /> Xem demo
              </motion.button>
            </div>
          </motion.div>
        </div>
        <div className={cx('heroBackground')} />
      </section>

      {/* Features Section */}
      <section className={cx('features')}>
        <div className={cx('container')}>
          <motion.div 
            className={cx('sectionHeader')}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={cx('sectionTitle')}>
              Tại sao chọn <span className={cx('accent')}>Ninja AI</span>?
            </h2>
            <p className={cx('sectionSubtitle')}>
              Chương trình được thiết kế bởi các chuyên gia AI hàng đầu với phương pháp học tập hiện đại
            </p>
          </motion.div>

          <div className={cx('featuresGrid')}>
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className={cx('featureCard')}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className={cx('featureIcon')}>{feature.icon}</div>
                <h3 className={cx('featureTitle')}>{feature.title}</h3>
                <p className={cx('featureDesc')}>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className={cx('curriculum')}>
        <div className={cx('container')}>
          <motion.div 
            className={cx('sectionHeader')}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={cx('sectionTitle')}>
              Lộ trình thực tập <span className={cx('accent')}>3 tháng</span>
            </h2>
            <p className={cx('sectionSubtitle')}>
              Chương trình được chia thành 4 giai đoạn, mỗi giai đoạn tập trung vào một khía cạnh cụ thể
            </p>
          </motion.div>

          <div className={cx('curriculumTimeline')}>
            {curriculum.map((phase, index) => (
              <motion.div 
                key={index}
                className={cx('phaseCard')}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className={cx('phaseHeader')}>
                  <div className={cx('phaseIcon')}>{phase.icon}</div>
                  <div className={cx('phaseInfo')}>
                    <h3 className={cx('phaseTitle')}>{phase.phase}</h3>
                    <div className={cx('phaseDuration')}>
                      <FiClock /> {phase.duration}
                    </div>
                  </div>
                </div>
                <div className={cx('phaseContent')}>
                   
                    <ul className={cx('phaseTopics')}>
                  {phase.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className={cx('phaseTopic')}>
                      <FiCheckCircle /> {topic}
                    </li>
                  ))}
                </ul>
                <p className={cx('phaseDesc')}>{phase.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={cx('testimonials')}>
        <div className={cx('container')}>
          <motion.div 
            className={cx('sectionHeader')}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={cx('sectionTitle')}>
              Học viên nói gì về <span className={cx('accent')}>Ninja AI</span>?
            </h2>
            <p className={cx('sectionSubtitle')}>
              Những câu chuyện thành công từ các học viên đã tốt nghiệp chương trình
            </p>
          </motion.div>

          <div className={cx('testimonialsGrid')}>
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className={cx('testimonialCard')}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={cx('testimonialRating')}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className={cx('star')} />
                  ))}
                </div>
                <p className={cx('testimonialContent')}>{testimonial.content}</p>
                <div className={cx('testimonialAuthor')}>
                  <div className={cx('authorInfo')}>
                    <h4 className={cx('authorName')}>{testimonial.name}</h4>
                    <p className={cx('authorRole')}>
                      {testimonial.role} tại {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={cx('ctaSection')}>
        <div className={cx('container')}>
          <motion.div 
            className={cx('ctaContent')}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={cx('ctaTitle')}>
              Sẵn sàng trở thành <span className={cx('accent')}>Ninja AI</span>?
            </h2>
            <p className={cx('ctaSubtitle')}>
              Tham gia cùng 500+ học viên đã thành công và bắt đầu hành trình AI của bạn ngay hôm nay
            </p>
            <motion.button 
              className={cx('ctaButton')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpenForm(true)}
            >
              Đăng ký khóa học <FiArrowRight />
            </motion.button>
          </motion.div>
        </div>
      </section>
      {openForm && <Form onClose={() => setOpenForm(false)} />}
    </div>
  );
};

export default NinjaAI;
