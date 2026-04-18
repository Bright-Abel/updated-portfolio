import type { SVGProps } from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  className2?: string;
}

export const StarIcon = ({ className, ...rest }: IconProps) => {
  return (
    <svg
      width='29'
      height='28'
      viewBox='0 0 29 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...rest}
    >
      <path
        d='M14.2656 0L17.6333 10.3647H28.5315L19.7147 16.7705L23.0824 27.1353L14.2656 20.7295L5.44885 27.1353L8.81656 16.7705L-0.00022316 10.3647H10.8979L14.2656 0Z'
        fill={className}
      />
    </svg>
  );
};
export const GmailIcon = ({ className, ...rest }: IconProps) => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...rest}
    >
      <path
        d='M18 17.5H16V6.5625L10 11.25L4 6.5625V17.5H2V2.5H3.2L10 7.8125L16.8 2.5H18M18 0H2C0.89 0 0 1.1125 0 2.5V17.5C0 18.163 0.210714 18.7989 0.585786 19.2678C0.960859 19.7366 1.46957 20 2 20H18C18.5304 20 19.0391 19.7366 19.4142 19.2678C19.7893 18.7989 20 18.163 20 17.5V2.5C20 1.83696 19.7893 1.20107 19.4142 0.732233C19.0391 0.263392 18.5304 0 18 0Z'
        fill={className}
      />
    </svg>
  );
};
