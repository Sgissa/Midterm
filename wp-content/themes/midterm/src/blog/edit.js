/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit() {
	return (
		<section {...useBlockProps()}>
			<div class="blog-container">
				<h2>How to Scale Your Business with SaaS Solutions</h2>
				<p class="blog-p">
					Growth comes with challenges, but the right SaaS tools can help
					businesses scale efficiently. We break down how automation, data
					insights, and cloud-based solutions empower companies to expand
					without increasing complexity.
				</p>
				<p>
					<span class="text-highlights">David Reynolds</span> 2/5/25
				</p>
			</div>
			<div class="blog-container">
				<h2>Security in the Cloud: Best Practices for 2025</h2>
				<p class="blog-p">
					As cyber threats become more sophisticated, ensuring the security of
					your SaaS applications is critical. Learn key strategies for
					safeguarding data, preventing breaches, and maintaining compliance in
					a cloud-first world.
				</p>
				<p>
					<span class="text-highlights">Sarah Patel</span> 1/24/25
				</p>
			</div>
			<div class="blog-container">
				<h2>Boosting Productivity with Seamless Integrations</h2>
				<p class="blog-p">
					Connecting your favorite tools can make or break your workflow. In
					this guide, we discuss the importance of integrations and how they
					enhance efficiency, reduce manual work, and improve collaboration
					across teams.
				</p>
				<p>
					<span class="text-highlights">Michael Thompson</span> 11/15/24
				</p>
			</div>
			<div class="blog-container">
				<h2>The Future of SaaS: Trends to Watch in 2025</h2>
				<p class="blog-p">
					As businesses continue to embrace digital transformation, SaaS is
					evolving at an unprecedented pace. From AI-driven automation to
					low-code development, we explore the biggest trends shaping the
					industry for the upcoming year.
				</p>
				<p>
					<span class="text-highlights">Emily Carter</span> 11/15/24
				</p>
			</div>
		</section>
	);
}
