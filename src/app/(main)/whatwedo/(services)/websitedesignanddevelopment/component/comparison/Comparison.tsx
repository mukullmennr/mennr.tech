import React from "react";

export default function Comparison() {
	return (
		<div className="comparison">
			<div className="container">
				<h3 className="comparison-heading">
					Well thought out design vs poorly thought out design
				</h3>

				<div className="comparison-circles">
					<div className="comparison-circles__item">
						<p>
							A bagel shop opens a new online storefront so
							customers can pre-order instead of waiting in line.
							The bakery places a button to reach the menu at the
							top of their website with clear instructions on how
							to pre order a meal. The customer orders through the
							website and is in and out of the store under two
							minutes.
						</p>
					</div>
					<div className="comparison-circles__item">
						<p>
							A bagel shop opens a new online storefront so
							customers can pre-order instead of waiting in line.
							The bakery doesn&apos;t put the menu button in an
							easy to find place, and has no instruction for
							ordering. The customer instead calls the bagel shop
							to order, causing more congestion at the register.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
