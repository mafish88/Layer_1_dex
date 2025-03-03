function main() {
    const args = process.argv.slice(2);
    const pubkey = args[0];
    const to = Buffer.from(pubkey, "hex");
    console.log(to);
}

main()