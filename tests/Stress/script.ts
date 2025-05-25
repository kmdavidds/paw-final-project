import http from 'k6/http';

export const options = {
  stages: [
    { duration: '5s', target: 200 },
    { duration: '1s', target: 1000 },
    { duration: '4s', target: 1000 },
    { duration: '5s', target: 0 },
  ],
};

export default function () {
  http.get('http://localhost:8000');
}