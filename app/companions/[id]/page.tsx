import { getCompanion } from '@/lib/actions/companion.action';
import { getSubjectColor } from '@/lib/utils';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Image from "next/image";
import CompanionComponent from '@/components/CompanionComponent';

interface CompanionSessionPageProps {
	params: Promise<{ id: string }>;
}

const CompanionSession = async ({ params } : CompanionSessionPageProps) => {

	const { id } = await params;
	const companion = await getCompanion(id);
	const user = await currentUser();

	const {name, subject, topic, duration} = companion;
	
	console.log("companion is", companion);
	if (!user) redirect('/sign-in');
	if (!name) redirect('/companions');

	return (
		<main className=''>
			<article className="flex rounded-border justify-between p-6 max-md:flex-col">
				<div className="flex items-start gap-2">

					{/* Image */}
					<div 
					className=" size-[72px] flex items-center justify-center rounded-lg max-md:hidden"
					style={{ backgroundColor: getSubjectColor(subject) }}
					>
						<Image 
						src={`/icons/${subject}.svg`} 
						alt={subject} 
						width={35} height={35}
						/>
					</div>

					{/* Description */}
					<div className="flex flex-col gap-2 w-full">
						<div className="flex items-center gap-2">
							<p className='font-bold text-2xl '>
								{name}
							</p>
							<div className="subject-badge max-md:hidden">
								{subject}
							</div>
						</div>
						<p className="text-lg ">{topic}</p>
					</div>


				</div>
				<div className="flex items-start justify-end text-2xl w-[60%] max-md:hidden ">
{duration} minutes
				</div>
			</article>
			<CompanionComponent 
			{...companion}
			companionId={id}
			userName={user.fullName!}
			userImage={user.imageUrl!}
			/>
		</main>
	)
}

export default CompanionSession