export function getProductName(formConfig) {
  let productName = 'URX_TRIAL';
  if (formConfig) {
      if (formConfig.productName) {
          productName = formConfig.productName
      } else if (formConfig.nickname) {
          productName = formConfig.nickname
      }
  }
  return productName;
}