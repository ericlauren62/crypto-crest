export default function capitalizeFirstLetter(params: string) {
	console.log(params.charAt(0).toUpperCase() + params.slice(1));
	return params.charAt(0).toUpperCase() + params.slice(1);
}
