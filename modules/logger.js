function log(message, level = "INFO") {
  const timestamp = new Date().toISOString();
  console.log(`${color}[${timestamp}]- [${level}] ${message}`);
}

module.exports = { log };
