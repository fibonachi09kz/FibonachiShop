export function objectToQueryString(obj: any) {
	const queryParams = [];

	for (const key in obj) {
		if (obj.hasOwnProperty(key)) {
			const value = obj[key];

			if (Array.isArray(value)) {
				// Convert array values to ?key[]=value1&key[]=value2 format
				if (value.length > 0) {
					value.forEach((item) => {
						queryParams.push(`${encodeURIComponent(key)}[]=${encodeURIComponent(item)}`);
					});
				} else {
					// If the array is empty, include the key with no value
					queryParams.push(`${encodeURIComponent(key)}=`);
				}
			} else {
				// Convert regular key-value pairs to ?key=value format
				queryParams.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
			}
		}
	}

	return `?${queryParams.join('&')}`;
}
