/*
 * Uploads a file to a release
 */
import FS from 'fs';

const uploadReleaseAsset = async ({
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

export default uploadReleaseAsset;
