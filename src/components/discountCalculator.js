// discountCalculator.js
function calculateDiscountPercentage(originalPrice, discountedPrice) {
  const discountAmount = originalPrice - discountedPrice;
  const discountPercentage = (discountAmount / originalPrice) * 100;
  return discountPercentage.toFixed(2); // נעגל לשתי ספרות אחרי הנקודה
}
export default calculateDiscountPercentage;
