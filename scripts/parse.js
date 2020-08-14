function parse(lines) {
	
	function TreeNode(data, depth) {
		this['name']= data;
		this['depth']= depth;
		this['children']=this.children || [];
	}
	
	const tree = new TreeNode(null, -1);
	
	const levels = [tree];
	
	function countTabs(line) {
		let count = 0; 
		
		for (let i = 0; i < line.length; i++) {
			let ch = line[i];

			if ((ch == '\t')) {
				count += 1;
			}else if (/[^\s]/.test(ch)){
				return count;
			}
		}
		return -1; // no content
	}
	
	for (let i = 0; i < lines.length; i++) {
		const line = lines[i];
		
		const tabcount = countTabs(line);
		
		if (tabcount >= 0) { //then add node to tree
			
			function topnode() {
				return levels[levels.length - 1];
			}
			
			while(tabcount - topnode().depth <= 0) {
				levels.pop();
			}
			const depth = levels.length - 1;
			
			const node = new TreeNode(line.substring(tabcount), depth);

			node.parent = topnode();

			if(node.parent.children){
				node.parent.children.push({...node})
			};
			
			levels.push({...node});
		}
	}
	return tree;
}

