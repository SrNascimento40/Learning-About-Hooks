import React, {useState, useEffect} from "react"

export default function exemplo() {
	const [count, setCount} = useState(0)
	//const [estado, método]= useState(valor para inicializar o count)

	useEffect(() => {
		document.title = `You clicked ${count} times`;
	})
	// useEffect permite a alteração no title

	return (
		<div>
			<p>you clicked {count} times</p>
			<button onClick = { () => this.count( {count + 1} )}>Click here</button>
		</div>
	)
}
