import styles from './Banner.module.scss';
import Image from 'next/image';
import images from '../../public/images/images';

const Banner = ({ start, end, reverse = false }) => {
  const sectionStyle = reverse ? styles.move_reverse : styles.move;

  return (
    <div className={styles.inner}>
      <div
        className={styles.wrapper}
        style={{
          transform: reverse && 'translateX(-200%)',
        }}
      >
        <section className={sectionStyle}>
          {images.slice(start, end).map((e, i) => (
            <Image
              key={i}
              width={100}
              height={100}
              src={e}
              alt={`event-${i}`}
            />
          ))}
        </section>
        <section className={sectionStyle}>
          {images.slice(start, end).map((e, i) => (
            <Image
              key={i}
              width={100}
              height={100}
              src={e}
              alt={`event-${i}`}
            />
          ))}
        </section>
        <section className={sectionStyle}>
          {images.slice(start, end).map((e, i) => (
            <Image
              key={i}
              width={100}
              height={100}
              src={e}
              alt={`event-${i}`}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export { Banner };
