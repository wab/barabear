import { css } from '~/styled-system/css';
import { styled } from '~/styled-system/jsx';

import { Loader } from '.';

const StyledInput = styled('input', {
  base: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    height: '48px',
    padding: '0 16px',
    border: '1px solid',
    borderColor: 'prussianBlue',
    borderRadius: 'lg',
    paddingRight: '48px',
  },
});

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean;
}

const Input: React.FunctionComponent<InputProps> = ({ isLoading, ...props }) => {
  return (
    <div className={css({ position: 'relative', maxWidth: '480px' })}>
      <StyledInput {...props} />
      {isLoading && (
        <Loader
          className={css({
            position: 'absolute',
            width: '48px',
            height: '48px',
            color: 'utOrange',
            right: 0,
            top: 0,
            padding: '12px',
          })}
        />
      )}
    </div>
  );
};

export { Input };
