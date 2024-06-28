import { motion, useScroll } from 'framer-motion'
import styles from './ReadLine.module.scss'
import cn from 'clsx'

export const ReadLine = () => {
	const { scrollYProgress } = useScroll()

	return (
		<motion.div
			className={cn(styles.progressBar)}
			style={{ scaleX: scrollYProgress }}
		/>
	)
}
