import { Certificate } from './Certificate'

export const CertificateList = () => {
	const imagesObj = import.meta.glob(
		'../../assets/certificates/*.{png,jpg,jpeg,webp}',
		{
			eager: true,
			import: 'default',
		},
	)

	const images: string[] = Object.values(imagesObj) as string[]

	return (
		<div className='h-80 sm:h-90 md:h-100 lg:h-120 flex gap-4 overflow-scroll scrollbar-none items-stretch'>
			{images.map((certificate, index) => {
				return <Certificate key={index} path={certificate} />
			})}
		</div>
	)
}
