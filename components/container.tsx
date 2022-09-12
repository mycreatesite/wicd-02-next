import { ReactNode } from 'react';
import styles from 'styles/container.module.scss'

type Props = {
  children?: ReactNode;
};

const Container = ({children}: Props) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}  
export default Container