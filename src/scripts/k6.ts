import http from 'k6/http';
import { check } from 'k6';

export const options = {
  iterations: 10,
  VUs: 10
};

export default function () {
  const response = http.get('http://host.docker.internal:3000/scores');
  check(response, {
    'is status 200': (r) => r.status === 200
  });
}
