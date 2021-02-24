import Profile from '../components/Perfil';
import {ExperienceBar} from '../components/ExperienceBar';
import { CompletedChallenge } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';

import Head from 'next/head'

import styles from '../styles/Home.module.css'

export default function Main() {
  return(
    <div className={styles.container}>
      <Head>
        <title>move</title>
      </Head>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChallenge />
          <Countdown />
          
        </div>
        <div>
        </div>
        
      </section>
    </div>
  )
}