const mongoose = require('mongoose');

const complianceMetricSchema = new mongoose.Schema({
  metricName: String,
  value: Number,
  status: String,
}, { timestamps: true });

module.exports = mongoose.model('ComplianceMetric', complianceMetricSchema);
