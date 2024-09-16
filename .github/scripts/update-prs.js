/* Fetch all open PRs and updates them with main branch.*/

const updatePrs = async ({ github, context }) => {
	const { repo, owner } = context.repo;
	const pulls = await github.rest.pulls.list({
		owner,
		repo,
		state: 'open',
		base: 'main',
		per_page: 100
	});

	const nonDraftAndDependabotPulls = pulls?.data?.filter((pr) => !pr.draft && pr.user.login !== "dependabot[bot]");
	let updatedBranches = 0;

	if (nonDraftAndDependabotPulls?.length > 0) {
		for (const pr of nonDraftAndDependabotPulls) {
			try {
				await github.rest.pulls.updateBranch({
					owner,
					repo,
					pull_number: pr.number
				});
				updatedBranches++;
			} catch (e) {
				console.error(e);
			}
		}
	}

	return `Updated branches: ${updatedBranches}/${nonDraftAndDependabotPulls.length}`;
};

export default updatePrs;
