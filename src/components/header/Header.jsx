import React from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';

import images from '../../images/images';

const Header = (props) => {
  const { search, setSearch } = props;
  return (
    <>
      <div className={(styles.app__header, styles.app__flex)}>
        <div className={styles.left__right}>
          <div className={styles.header__left__side}>
            {/* <motion.div
            animate={{ x: ['0px', '100px'] }}
            transition={{
              type: 'tween',
              duration: 20,
              delay: 1,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            initial={{ x: '-50px', opacity: 2 }}
          > */}
            <div>
              {images.slice(0, 7).map((e) => (
                <Image width={100} height={100} src={e} alt={`event-${e}`} />
              ))}
            </div>
            {/* </motion.div> */}

            {/* <motion.div
            animate={{ x: ['100px', '0px'] }}
            transition={{
              type: 'tween',
              duration: 20,
              delay: 1,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            initial={{ x: '-50px', opacity: 2 }}
          > */}
            {images.slice(7, 14).map((e) => (
              <Image width={100} height={100} src={e} alt={`event-${e}`} />
            ))}
            {/* </motion.div> */}

            {/* <motion.div animate={{ x: 100 }} transition={{ delay: 1 }}> */}
            {images.slice(14, 21).map((e) => (
              <Image width={100} height={100} src={e} alt={`event-${e}`} />
            ))}
            {/* </motion.div> */}
          </div>
          <div className={styles.header__right__side}>
            <h2>Subscribe now to our newsletter</h2>
            <div>
              <div>
                <label>Email:</label>
                <input type="search" placeholder="Please enter your email" />
              </div>
              <button>subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
