import React from 'react'
import styles from '../styles/Home.module.css';
import Article from './Articles';
import TopArticle from '@/components/TopArticle';
import Image from 'next/image';

function Home() {

  const articlesData = [
    {
      nameArticle: 'PHANTOM I White',
      descArticle: 'A class of its own.',
      url: './image/phantom1.png'
    },
    {
      nameArticle: 'PHANTOM II Gold',
      descArticle: 'Pure sound.',
      url: './image/phantom2.png'
    },
    {
      nameArticle: 'PHANTOM II Black',
      descArticle: 'Deeply nomadic.',
      url: './image/phantom3.png'
    },
    {
      nameArticle: 'PHANTOM II White',
      descArticle: 'Intensively immersive.',
      url: './image/phantom4.png'
    },
  ];

  const Articles = articlesData.map((data, i) => {
    return <Article
      key={i}{...data}
    />
  })


  return (
    <div>

      <TopArticle />
      <div className={styles.articlesContainer}>{Articles}</div>
    </div>
  );
}

export default Home