import { httpGet } from './httpClient';

export async function registerUser(formValues) {
  const formData = new FormData();
  Object.entries(formValues).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      formData.append(key, value);
    }
  });
  console.log(formData);
  const response = await fetch('http://localhost:8080/portfolio/users/register', {
    method: 'POST',
    body: formData,
  });
  if (!response.ok) {
    const text = await response.text().catch(() => '');
    throw new Error(`HTTP ${response.status} ${text}`);
  }
  const contentType = response.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    return response.json();
  }
  return response.text();
}

export async function fetchProjects() {
  // Placeholder: replace with your real API endpoint
  return httpGet('/api/projects');
}


