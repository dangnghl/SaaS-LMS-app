import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"
import { cn, getSubjectColor } from "@/lib/utils"
import Link from "next/link";
import Image from "next/image"

interface CompanionsListProps {
	title: string;
	companions?: Companion[];
	classNames?: string;
}

const CompanionsList = ({title,companions, classNames}: CompanionsListProps) => {
	return (
		<article className={cn("companion-list", classNames)}>
			<h2 className="font-bold text-3xl ">{title}</h2>
			
			<Table>
				
				<TableCaption>A list of your recent invoices.</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className="text-lg w-2/3">Lesson</TableHead>
						<TableHead className="text-lg">Subject</TableHead>
						<TableHead className="text-lg text-right">Duration</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{companions?.map(({id,subject,name,topic,duration}) => (
						<TableRow key={id}>

							{/* Lesson */}
							<TableCell>
								<Link href={`/companions/${id}`}>
									<div className="flex items-start gap-2">

										{/* SubjectIcon Image*/}
										<div className=" size-[72px] flex items-center justify-center rounded-lg max-md:hidden"
										style={{backgroundColor: getSubjectColor(subject)}}
										>
											<Image 
												src={`/icons/${subject}.svg`}
												alt={subject}
												width={35}
												height={35}
											/>
										</div>
										
										{/* Lesson Details */}
										<div className="w-[80%] flex flex-col gap-2 ">
											<p className="font-bold text-2xl">{name}</p>
											<p className="text-lg text-muted-foreground text-wrap line-clamp-4">{topic}</p>
										</div>
									</div>
								</Link>
							</TableCell>

							{/* Subject */}
							<TableCell>
								<div className="subject-badge w-fit max-md:hidden">{subject}</div>
								<div className="flex items-center justify-center rounded-lg w-fit p-2 md:hidden" 
									style={{backgroundColor: getSubjectColor(subject)}}
								>
									<Image 
										src={`/icons/${subject}.svg`}
										alt={subject}
										width={18}
										height={18}
									/>
								</div>
							</TableCell>

							{/* Duration */}
							<TableCell>
								<div className="flex items-center gap-2 w-full justify-end">
									<p className="text-2xl">{duration} {' '}
										<span className="max-md:hidden">mins</span>
									</p>
									<span className="md:hidden">
											<Image 
												src={`/icons/clock.svg`}
												alt="minutes"
												width={18}
												height={18}
											/>
										</span>
								</div>
							</TableCell>
						</TableRow>
					))}

				</TableBody>
			</Table>
		</article>
	)
}

export default CompanionsList