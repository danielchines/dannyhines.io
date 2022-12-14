import * as React from 'react';

import clsxm from '@/lib/clsxm';

import UnstyledLink, { UnstyledLinkProps } from '@/components/links/UnstyledLink';

enum ButtonVariant {
  'primary',
  'outline',
  'ghost',
  'light',
  'dark',
}

type ButtonLinkProps = {
  variant?: keyof typeof ButtonVariant;
} & UnstyledLinkProps;

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ children, className, variant = 'primary', ...rest }, ref) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsxm(
          'inline-flex items-center rounded px-4 py-2 font-semibold',
          'focus:outline-none focus-visible:ring focus-visible:ring-primary-500',
          'scale-100 hover:scale-[1.03] active:scale-[0.97] motion-safe:transform-gpu',
          'shadow-sm',
          'transition-colors duration-75',
          'transition duration-75',
          //#region  //*=========== Variants ===========
          [
            variant === 'primary' && [
              'bg-primary-600 text-white',
              'border border-primary-600',
              'hover:bg-primary-700 hover:text-white',
              'active:bg-primary-600',
              'disabled:bg-primary-400 disabled:hover:bg-primary-400',
            ],
            variant === 'outline' && [
              'text-primary-500 dark:text-primary-200',
              'border border-primary-500 dark:border-primary-200',
              'hover:bg-primary-50 active:bg-primary-100 disabled:bg-primary-100',
              'dark:hover:bg-gray-900 dark:active:bg-gray-800 dark:disabled:bg-gray-800',
            ],
            variant === 'ghost' && [
              'text-primary-500',
              'shadow-none',
              'hover:bg-primary-50 active:bg-primary-100 disabled:bg-primary-100',
              'dark:hover:bg-gray-900 dark:active:bg-gray-800 dark:disabled:bg-gray-800',
            ],
          ],
          //#endregion  //*======== Variants ===========
          'disabled:cursor-not-allowed',
          className
        )}
      >
        {children}
      </UnstyledLink>
    );
  }
);

export default ButtonLink;
