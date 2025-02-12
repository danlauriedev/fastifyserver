import http from 'k6/http';
import { check } from 'k6';

const osType = __ENV.OS_TYPE || 'Darwin';
const BASE_URL =
  osType === 'linux' ? 'http://localhost:3000/scores' : 'http://host.docker.internal:3000/scores';

export const options = {
  iterations: 10,
  VUs: 10
};

export default function () {
  const response = http.get(BASE_URL);
  check(response, {
    'is status 200': (r) => r.status === 200
  });
}
