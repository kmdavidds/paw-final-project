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

export function handleSummary(data) {
    const summary = createCustomSummary(data);

    return {
        'stdout': summary,
    };
}

function createCustomSummary(data) {
    const metrics = data.metrics;

    const duration = data.state.testRunDurationMs / 1000;
    const httpReqs = metrics.http_reqs?.values?.count || 0;
    const httpReqRate = metrics.http_reqs?.values?.rate || 0;
    const httpReqDuration = metrics.http_req_duration?.values || {};
    const httpReqFailed = metrics.http_req_failed?.values?.rate || 0;
    const dataReceived = metrics.data_received?.values?.count || 0;
    const dataSent = metrics.data_sent?.values?.count || 0;
    const vus = metrics.vus?.values || {};
    const iterations = metrics.iterations?.values?.count || 0;

    // Helper functions
    const formatBytes = (bytes) => {
        if (bytes === 0) return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
    };

    const formatDuration = (ms) => {
        if (ms < 1000) return `${ms.toFixed(0)}ms`;
        return `${(ms / 1000).toFixed(2)}s`;
    };

    const formatPercentage = (rate) => {
        return `${(rate * 100).toFixed(2)}%`;
    };

    let summary = '\n';
    summary += '🚀 K6 Stress Test Results\n';
    summary += '========================\n\n';

    summary += '📊 Test Overview:\n';
    summary += `   Duration: ${duration.toFixed(1)}s\n`;
    summary += `   Total Requests: ${httpReqs.toLocaleString()}\n`;
    summary += `   Request Rate: ${httpReqRate.toFixed(1)} req/s\n`;
    summary += `   Virtual Users: ${vus.min || 0} → ${vus.max || 0} (peak)\n`;
    summary += `   Iterations: ${iterations.toLocaleString()}\n\n`;

    summary += '⚡ Performance:\n';
    summary += `   Response Time (avg): ${formatDuration(httpReqDuration.avg || 0)}\n`;
    summary += `   Response Time (min): ${formatDuration(httpReqDuration.min || 0)}\n`;
    summary += `   Response Time (max): ${formatDuration(httpReqDuration.max || 0)}\n\n`;

    const successRate = 100 - (httpReqFailed * 100);
    const statusIcon = httpReqFailed === 0 ? '✅' : httpReqFailed < 0.01 ? '⚠️' : '❌';
    summary += `${statusIcon} Success Rate:\n`;
    summary += `   Successful: ${successRate.toFixed(2)}%\n`;
    summary += `   Failed: ${formatPercentage(httpReqFailed)}\n\n`;

    summary += '📡 Data Transfer:\n';
    summary += `   Received: ${formatBytes(dataReceived)}\n`;
    summary += `   Sent: ${formatBytes(dataSent)}\n\n`;

    return summary;
}