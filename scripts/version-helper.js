import { argv } from 'process';
const [, , version] = argv;
const [semver, prerelease] = version.split('-');
if (prerelease) {
	throw new Error('This seems to be a prerelease - will not publish');
}
console.log(version);
