export const theme_palette = 
{
  primary:   '#050C9C',
  secondary: '#3572EF',
  light:     '#3ABEF9',
  lighter:   '#A7E6FF',
  white:     '#F4F4F4',
  black:     '#1A2130',
  getRgba: (hex: string, opacity = 1) => 
  {
    hex = hex.replace(/^#/, '');
    if (hex.length === 3) {
      hex = hex.split('').map(c => c + c).join('');
    }
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }
}