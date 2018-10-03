const os = require('os');

module.exports = {
  getSystemInfo: () => {
    let cpu_arch = os.arch();
    let host_name = os.hostname();
    let os_name = os.type();
    
    let output = `CPU Architecture: ${cpu_arch}\n`;
    output += `Hostname: ${host_name}\n`;
    output += `OS Name: ${os_name}`;

    return output;
  },
  
  getUserInfo: () => {
    let user_info = os.userInfo();
    let username = os.userInfo().username;
    let home_dir = os.userInfo().homedir;
    
    let output = `UserInfo: ${user_info}\n`;
    output += `Username: ${username}\n`;
    output += `Home Directory: ${home_dir}`;

    return output;
  }
}