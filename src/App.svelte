<script>
	/* --------------- creating variables --------------- */
	let firstName = 'Amka';
	let lastName = 'Limbu';
	let color = 'blue';
	let showText = false;
	let users = [
		{ id: 1, name: 'Amka' },
		{ id: 2, name: 'Limbu' },
		{ id: 3, name: 'Muna' },
	];
	let name = '';

	/* --------------- reactive value --------------- */
	$: fullName = `${firstName} ${lastName}`;

	/* --------------- toggling --------------- */
	const toggle = () => {
		color = color === 'blue' ? 'red' : 'blue';
		showText = !showText;
	};

	const addUser = userName => {
		if (userName) {
			users = [...users, { id: users.length + 1, name: userName }];

			name = '';
		}
	};
</script>

<main>
	<!--------------- templating --------------->
	<h1 style="color: {color}">Hello {fullName}</h1>

	<!--------------- conditionals --------------->
	{#if showText}
		<p>Some text</p>
	{:else}
		<p>No text</p>
	{/if}

	<!--------------- events --------------->
	<!-- <button on:click={() => (color = 'red')}>Click</button> -->
	<button on:click={toggle}>Toggle</button>

	<!--------------- forms --------------->
	<form on:submit|preventDefault>
		<input bind:value={name} />

		<button type="submit" on:click={() => addUser(name)}>Add User</button>
	</form>

	<!--------------- loops ---------------->
	<ul>
		{#each users as user (user.id)}
			<li>{user.name}</li>
		{/each}
	</ul>
</main>

<!-- styles goes here -->
<style>
	main {
		text-align: center;
		border: 1px solid red;
		padding: 1rem;
		background: #000;
		border-radius: 10px;
		box-shadow: 0 5px 15px 3px rgba(0, 0, 0, 0.5);
	}

	h1 {
		font-size: 2.5rem;
	}

	p {
		font-size: 1.2rem;
	}

	button {
		padding: 0.5rem 1rem;
		border: none;
		border-radius: 0.5rem;
		background-color: #333;
		color: #fff;
		font-size: 1rem;
		cursor: pointer;
	}

	p ~ button {
		margin-bottom: 1rem;
	}

	form {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	input {
		padding: 0.5rem 1rem;
		border: none;
		border-radius: 0.5rem;
		font-size: 1rem;
	}

	ul {
		list-style: none;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	@media (max-width: 540px) {
		form {
			flex-direction: column;
		}
	}
</style>
