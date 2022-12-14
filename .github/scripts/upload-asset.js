/*
 * Uploads a file to a release
 */
const FS = require('fs');

module.exports = async ({
	github,
	context,
	release_id,
	assetName,
	assetPath,
}) => {
	const { repo, owner } = context.repo;
	return await github.rest.repos.uploadReleaseAsset({
		owner,
		repo,
		release_id,
		name: assetName,
		data: FS.readFileSync(assetPath),
	});
};
