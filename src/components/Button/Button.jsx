import { Buttonload } from './Button.module';

export const Button = ({ onClick }) => {
  return (
    <Buttonload type="button" onClick={onClick}>
      Load More
    </Buttonload>
  );
};
