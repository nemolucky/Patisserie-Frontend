import { Certificate } from './Certificate'

export const CertificateList = () => {
	return (
		<div className='h-60 sm:h-70 xl:h-80 flex gap-4 overflow-scroll scrollbar-none'>
			<Certificate />
			<Certificate />
			<Certificate />
			<Certificate />
			<Certificate />
		</div>
	)
}
