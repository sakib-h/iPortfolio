import React from "react";
import "./Resume.css";
import "./Responsive.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
const Resume = () => {
	return (
		<section className=" resume p-3">
			<h2>Resume</h2>
			<p>
				{" "}
				Magnam dolores commodi suscipit. Necessitatibus eius consequatur
				ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
				quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
				Quia fugiat sit in iste officiis commodi quidem hic quas.{" "}
			</p>

			<div className="resumeArea row" data-aos="fade-up" s>
				<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-l col-xxl-6 mb-2">
					<h3>Summary</h3>
					<Timeline className="timeLine">
						<TimelineItem className="timeLineItem ">
							<TimelineSeparator className="timeLineSeparator">
								<TimelineDot className="timelineDot" />
								<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent className="timelineContent">
								<h4>Alex Smith</h4>
								<p>
									<em>
										{" "}
										Innovative and deadline-driven Graphic
										Designer with 3+ years of experience
										designing and developing user-centered
										digital/print marketing material from
										initial concept to final, polished
										deliverable.{" "}
									</em>
								</p>
								<ul>
									<li>Portland par 127,Orlando, FL</li>
									<li>(123) 456-7891</li>
									<li>alice.barkley@example.com</li>
								</ul>
							</TimelineContent>
						</TimelineItem>
					</Timeline>

					<h3>Education</h3>

					<Timeline className="timeLine">
						<TimelineItem className="timeLineItem ">
							<TimelineSeparator className="timeLineSeparator">
								<TimelineDot className="timelineDot" />
								<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent className="timelineContent">
								<h4> Master of Fine Arts & Graphic Design </h4>
								<div className="year">
									<span>2015-2016</span>
								</div>
								<small>
									<em>
										{" "}
										Rochester Institute of Technology,
										Rochester, NY{" "}
									</em>
								</small>
								<p>
									Qui deserunt veniam. Et sed aliquam labore
									tempore sed quisquam iusto autem sit. Ea
									vero voluptatum qui ut dignissimos deleniti
									nerada porti sand markend
								</p>
							</TimelineContent>
						</TimelineItem>

						<TimelineItem className="timeLineItem ">
							<TimelineSeparator className="timeLineSeparator">
								<TimelineDot className="timelineDot" />
								<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent className="timelineContent">
								<h4>
									{" "}
									Bachelor of Fine Arts & Graphic Design{" "}
								</h4>
								<div className="year">
									<span>2010-2014</span>
								</div>
								<small>
									<em>
										{" "}
										Rochester Institute of Technology,
										Rochester, NY{" "}
									</em>
								</small>
								<p>
									Qui deserunt veniam. Et sed aliquam labore
									tempore sed quisquam iusto autem sit. Ea
									vero voluptatum qui ut dignissimos deleniti
									nerada porti sand markend
								</p>
							</TimelineContent>
						</TimelineItem>
					</Timeline>
				</div>
				<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-l col-xxl-6 mb-2">
					<h3>Professional Experience</h3>
					<Timeline className="timeLine">
						<TimelineItem className="timeLineItem ">
							<TimelineSeparator className="timeLineSeparator">
								<TimelineDot className="timelineDot" />
								<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent className="timelineContent">
								<h4>Senior graphic design specialist</h4>
								<div className="year">
									<span>2019-Present</span>
								</div>
								<small>
									<em>Experion, New York, NY</em>
								</small>
								<ul>
									<li>
										{" "}
										Lead in the design, development, and
										implementation of the graphic, layout,
										and production communication materials{" "}
									</li>
									<li>
										{" "}
										Delegate tasks to the 7 members of the
										design team and provide counsel on all
										aspects of the project.{" "}
									</li>
									<li>
										{" "}
										Supervise the assessment of all graphic
										materials in order to ensure quality and
										accuracy of the design{" "}
									</li>
									<li>
										{" "}
										Oversee the efficient use of production
										project budgets ranging from $2,000 -
										$25,000{" "}
									</li>
								</ul>
							</TimelineContent>
						</TimelineItem>

						<TimelineItem className="timeLineItem ">
							<TimelineSeparator className="timeLineSeparator">
								<TimelineDot className="timelineDot" />
								<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent className="timelineContent">
								<h4> Graphic design specialist </h4>
								<div className="year">
									<span>2017-2018</span>
								</div>
								<small>
									<em>
										Stepping Stone Advertising, New York, NY
									</em>
								</small>
								<ul>
									<li>
										Developed numerous marketing programs
										(logos, brochures,infographics,
										presentations, and advertisements).
									</li>
									<li>
										Managed up to 5 projects or tasks at a
										given time while under pressure
									</li>
									<li>
										Recommended and consulted with clients
										on the most appropriate graphic design
									</li>
									<li>
										Created 4+ design presentations and
										proposals a month for clients and
										account managers
									</li>
								</ul>
							</TimelineContent>
						</TimelineItem>
					</Timeline>
				</div>
			</div>
		</section>
	);
};

export default Resume;
