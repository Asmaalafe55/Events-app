import React from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';

import bgPic from '../../images/bgIMG.png';

const Header = (props) => {
  const { search, setSearch } = props;
  return (
    <>
      <div className={(styles.app__header, styles.app__flex)}>
        <motion.div>
          {/* animate={{ x: 100 }} transition={{ delay: 1 }} */}
          <Image width={1400} height={1000} src={bgPic} />
          <input type="search" onChange={(e) => setSearch(e)} />
        </motion.div>
      </div>
    </>
  );
};

export default Header;
