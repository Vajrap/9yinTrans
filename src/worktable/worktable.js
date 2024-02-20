const itemStates = [];

function renderItem() {
    const tailorItems = [
        hair_accessory1,
        top1,
        bottom1,
        boots1,
        shinguard1,
        wristguard1,
        hair_accessory2,
        top2,
        bottom2,
        boots2,
        shinguard2,
        wristguard2
    ]

    const accessoriesItems = [
        earring1,
        earring2,
        ring1,
        ring2,
        necklace1,
        necklace2
    ]

    const items = [
        tailorItems,
        accessoriesItems
    ]

    const itemContainer = document.getElementById("items");
    items.forEach(itemCategory => {
        itemCategory.forEach(item => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("item");
    
            // Display the equipment name as a string (placeholder for images)
            itemElement.innerHTML = `<h3>${item.name}</h3>`;
    
            // Create buttons for incrementing and decrementing the count
            const countContainer = document.createElement("div");
            countContainer.classList.add("count-container");
    
            const decrementButton = document.createElement("button");
            decrementButton.innerHTML = "-";
            decrementButton.addEventListener("click", () => decrementCount(item));
            countContainer.appendChild(decrementButton);
    
            const countDisplay = document.createElement("span");
            countDisplay.innerText = "0"; // Initial count
            countContainer.appendChild(countDisplay);
    
            const incrementButton = document.createElement("button");
            incrementButton.innerHTML = "+";
            incrementButton.addEventListener("click", () => incrementCount(item));
            countContainer.appendChild(incrementButton);
    
            itemElement.appendChild(countContainer);
    
            // Create a floating tooltip for resource items
            const tooltip = document.createElement("div");
            tooltip.classList.add("tooltip");
            itemElement.appendChild(tooltip);
    
            item.resourceNeeded.forEach(resource => {
                const resourceName = resource.resource.name;
                const resourceQuantity = resource.quantity;
                const resourceObtain = resource.resource.obtain;
                const resourceItem = document.createElement("div");
                resourceItem.innerHTML = `${resourceQuantity} * ${resourceName} : from -> ${resourceObtain}`;
                tooltip.appendChild(resourceItem);
            });
    
            // Show/hide tooltip and update its position on hover
            itemElement.addEventListener("mousemove", (event) => {
                tooltip.style.display = "block";
                tooltip.style.top = (event.clientY); // Add some offset to avoid overlap with cursor
                tooltip.style.left = (event.clientX) + "px";
            });
    
            itemElement.addEventListener("mouseleave", () => {
                tooltip.style.display = "none";
            });
    
            itemContainer.appendChild(itemElement);
            itemStates.push({ item: item, count: 0})
        })
    });
}

function incrementCount(item) {
    const itemContainer = document.getElementById("items");
    const itemElements = itemContainer.getElementsByClassName("item");

    for (const itemElement of itemElements) {
        const itemName = itemElement.querySelector("h3").innerText;
        if (itemName === item.name) {
            const countDisplay = itemElement.querySelector(".count-container span");
            const currentCount = parseInt(countDisplay.innerText);
            countDisplay.innerText = String(currentCount + 1);

            const index = itemStates.findIndex(states => states.item.name === item.name)
            if (index !== -1) {
                itemStates[index].count += 1;
            }
            renderPlayerHelper();

            break; // No need to continue the loop once the item is found
        }
    }
}

function decrementCount(item) {
    const itemContainer = document.getElementById("items");
    const itemElements = itemContainer.getElementsByClassName("item");

    for (const itemElement of itemElements) {
        const itemName = itemElement.querySelector("h3").innerText;
        if (itemName === item.name) {
            const countDisplay = itemElement.querySelector(".count-container span");
            const currentCount = parseInt(countDisplay.innerText);

            if (currentCount > 0) {
                countDisplay.innerText = String(currentCount - 1);
                
                const index = itemStates.findIndex(states => states.item.name === item.name)
                if (index !== -1 && itemStates[index].count > 0) {
                    itemStates[index].count -= 1;
                    renderPlayerHelper();
                }
            }

            break; // No need to continue the loop once the item is found
        }
    }
}

function renderPlayerHelper() {
    const playerHelperContainer = document.getElementById("player-helper");
    playerHelperContainer.innerHTML = ""; // Clear previous content

    // Create an object to store aggregated resource quantities
    const aggregatedResources = {};

    // Iterate through the items in itemStates
    itemStates.forEach(state => {
        if (state.count > 0) {
            const item = state.item;
            // Aggregate resource quantities for the item
            const aggregatedItemResources = aggregateResources(item.resourceNeeded);
            // Update the global aggregatedResources object
            for (const resourceName in aggregatedItemResources) {
                if (aggregatedResources[resourceName]) {
                    aggregatedResources[resourceName].quantity += aggregatedItemResources[resourceName].quantity * state.count;
                } else {
                    aggregatedResources[resourceName] = {
                        quantity: aggregatedItemResources[resourceName].quantity * state.count,
                    };
                }
            }
        }
    });

    // Display the aggregated resources
    Object.keys(aggregatedResources).forEach(resourceName => {
        const resourceData = aggregatedResources[resourceName];
        const resourceQuantity = resourceData.quantity;
        const resourceObtain = resourceData.obtain;

        const resourceItem = document.createElement("div");
        resourceItem.innerHTML = `${resourceQuantity} ${resourceName}`;
        playerHelperContainer.appendChild(resourceItem);
    });

    playerHelperContainer.style.display = "block";
}

function aggregateResources(resourceItems) {
    const aggregatedResources = {};
    resourceItems.forEach(item => {
        const resource = item.resource;
        const resourceName = resource ? resource.name : null;
        const resourceQuantity = item.quantity;
        const resourceObtain = resource ? resource.obtain : null;

        if (resourceName) {
            if (aggregatedResources[resourceName]) {
                aggregatedResources[resourceName].quantity += resourceQuantity;
            } else {
                aggregatedResources[resourceName] = {
                    quantity: resourceQuantity,
                    obtain: resourceObtain
                };
            }
        }
    });
    return aggregatedResources;
}
