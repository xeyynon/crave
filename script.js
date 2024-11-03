document.addEventListener('DOMContentLoaded', () => {
    // Example interactivity: FAQ expand/collapse animations
    const faqItems = document.querySelectorAll('details');

    faqItems.forEach(item => {
        item.addEventListener('toggle', () => {
            faqItems.forEach(otherItem => {
                if (otherItem !== item) otherItem.open = false;
            });
        });
    });

    // Event listeners for location and vendor selection
    document.getElementById('fsrp').addEventListener('change', loadVendors);
    document.getElementById('vendor').addEventListener('change', loadMenu);
});

const vendors = {
    "Rock Plaza": ["Swagat", "Olive"],
    "Food Street": ["Bits and Bytes", "Zu Zu", "Oasis Restaurant", "Cake Stories", "Ice Cream Bakery"],
    "Maggie Hotspot": ["Maggie Hotspot"]
};

const menuItems = {
    "Swagat": [
        { name: "Paneer Butter Masala", price: 8.00 },
        { name: "Dal Makhani", price: 7.50 },
        { name: "Vegetable Biryani", price: 6.50 },
        { name: "Butter Naan", price: 2.00 }
    ],
    "Olive": [
        { name: "Pasta Arrabiata", price: 8.50 },
        { name: "Margherita Pizza", price: 9.00 },
        { name: "Garlic Bread", price: 3.00 }
    ],
    "Bits and Bytes": [
        { name: "Chicken Biryani", price: 9.50 },
        { name: "Paneer Tikka", price: 8.00 },
        { name: "Veg Pakora", price: 4.50 },
        { name: "Chole Bhature", price: 7.00 }
    ],
    "Zu Zu": [
        { name: "Veg Thali", price: 10.00 },
        { name: "Fish Curry", price: 12.00 },
        { name: "Samosa", price: 2.00 },
        { name: "Lassi", price: 3.50 }
    ],
    "Oasis Restaurant": [
        { name: "Methi Thepla", price: 5.00 },
        { name: "Dal Tadka", price: 6.00 },
        { name: "Kadai Chicken", price: 10.00 },
        { name: "Pulao", price: 7.00 }
    ],
    "Cake Stories": [
        { name: "Chocolate Cake Slice", price: 3.50 },
        { name: "Red Velvet Cake Slice", price: 4.00 },
        { name: "Cupcake", price: 2.50 }
    ],
    "Ice Cream Bakery": [
        { name: "Vanilla Ice Cream", price: 1.50 },
        { name: "Chocolate Ice Cream", price: 1.50 },
        { name: "Falooda", price: 3.00 }
    ],
    "Maggie Hotspot": [
        { name: "Classic Maggi", price: 2.00 },
        { name: "Masala Maggi", price: 2.50 },
        { name: "Cheese Maggi", price: 3.00 }
    ]
};

function loadVendors() {
    const location = document.getElementById('fsrp').value;
    const vendorSelect = document.getElementById('vendor');
    const vendorSelectionDiv = document.getElementById('vendor-selection');
    const menuSelectionDiv = document.getElementById('menu-selection');
    const menuList = document.getElementById('menu-list');

    vendorSelect.innerHTML = '<option value="">Select a vendor</option>'; // Reset vendor options
    menuSelectionDiv.style.display = 'none'; // Hide menu section initially

    if (location) {
        const vendorOptions = vendors[location] || [];
        vendorOptions.forEach(vendor => {
            const option = document.createElement('option');
            option.value = vendor;
            option.textContent = vendor;
            vendorSelect.appendChild(option);
        });
        vendorSelectionDiv.style.display = 'block'; // Show vendor selection
    } else {
        vendorSelectionDiv.style.display = 'none'; // Hide vendor selection if no location
    }
}

function loadMenu() {
    const vendor = document.getElementById('vendor').value;
    const menuList = document.getElementById('menu-list');
    const menuSelectionDiv = document.getElementById('menu-selection');

    menuList.innerHTML = ''; // Clear existing menu items

    if (vendor) {
        const items = menuItems[vendor] || [];
        items.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `
                <input type="checkbox" id="${item.name.replace(/\s+/g, '')}" />
                <label for="${item.name.replace(/\s+/g, '')}">${item.name} - $${item.price.toFixed(2)}</label>
                <input type="number" min="0" value="0" placeholder="Quantity" />
                <input type="text" placeholder="Special Instructions" />
            `;
            menuList.appendChild(li);
        });
        menuSelectionDiv.style.display = 'block'; // Show menu selection
    } else {
        menuSelectionDiv.style.display = 'none'; // Hide menu selection if no vendor
    }
}

document.getElementById('confirm-order-btn').addEventListener('click', function() {
    // Logic to gather selected items and display in summary
    const summaryDetails = document.getElementById('summary-details');
    summaryDetails.innerHTML = 'Selected Items: ...'; // Update with actual selected items
    document.getElementById('order-summary').style.display = 'block';
});

document.getElementById('place-order-btn').addEventListener('click', function() {
    // Logic to place the order and display confirmation
    const orderNumber = Math.floor(Math.random() * 10000); // Simulate order number
    const deliveryTime = '30 minutes'; // Simulate delivery time
    document.getElementById('order-number').textContent = orderNumber;
    document.getElementById('delivery-time').textContent = deliveryTime;
    document.getElementById('order-confirmation').style.display = 'block';
    document.getElementById('order-tracking').style.display = 'block'; // Show tracking section
});

function openChat() {
    // Logic for live chat
    alert('Opening chat support...');
}

function showProfileSettings() {
    // Logic to edit profile
    alert('Opening profile settings...');
}

function viewOrderHistory() {
    // Logic to view order history
    alert('Viewing order history...');
}
