export function condition(condition) {
  switch(condition) {
    case 'storm':
      return icon = {
        name:'rainy-outline',
        color: '#00CBFE'
      };
      break;
    case 'clear_day':
      return icon = {
        name:'partly-sunny-outline',
        color: '#FFD700'
      };
      break;
    case 'rain':
      return icon = {
        name:'rainy-outline',
        color: '#36D1DC'
      };
      break;
    default:
      return icon = {
        name:'cloud-outline',
        color: '#5B86E5'
      };
  }
}