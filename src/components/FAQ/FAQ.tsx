"use client";

import React from "react";
import * as Accordion from "@radix-ui/react-accordion";

interface Ques {
	question: string;
	answer: string;
}

interface FAQProps {
	children: React.ReactNode;
	ques: Ques[];
}

interface AccordionElement {
	children: React.ReactNode;
}

function AccordionTrigger({ children, ...props }: AccordionElement) {
	return (
		<Accordion.Header className="accordion-header">
			<Accordion.Trigger className="accordion-trigger" {...props}>
				<p>{children}</p>
				<div>
					<span></span>
					<span></span>
				</div>
			</Accordion.Trigger>
		</Accordion.Header>
	);
}

function AccordionContent({ children, ...props }: AccordionElement) {
	return (
		<Accordion.Content {...props} className="accordion-content">
			{children}
		</Accordion.Content>
	);
}

export default function FAQ({ children, ques }: FAQProps) {
	const accordionItems = ques.map((item) => {
		return (
			<Accordion.Item
				key={item.question}
				className="accordion-item"
				value={item.question}
			>
				<AccordionTrigger>{item.question}</AccordionTrigger>

				<AccordionContent>{item.answer}</AccordionContent>
			</Accordion.Item>
		);
	});

	return (
		<div className="faq">
			<div className="container">
				<h3 className="faq-heading">{children}</h3>

				<div className="faq-accordion">
					<Accordion.Root
						className="accordion-root"
						type="single"
						collapsible
					>
						{accordionItems}
					</Accordion.Root>
				</div>
			</div>
		</div>
	);
}
