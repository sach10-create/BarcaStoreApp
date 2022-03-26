const Filters = () => {
    return (
        <section className="side-nav">
            <div className="form-container">
                <section className="form-header d-flex align-center justify-content-center">
                    <h3 className="form-heading">Filters</h3>
                    <a href="#" className="link-btn">Clear All</a>
                </section>
                <ul className="radio-btn-container">
                    <li className="no-list form-heading">Sort by</li>
                    <li className="no-list">
                        <input type="radio" id="radio-btn" name="radio-btn" value="Price Low to High" /> Price: Low to
                        High
                    </li>
                    <li className="no-list">
                        <input type="radio" id="radio-btn" name="radio-btn" value="Price Low to High" /> Price: High to
                        Low
                    </li>
                    <li className="no-list"><input type="radio" name="radio-btn" id="radio-btn" value="Customer Rating" />
                        Customer
                        Rating</li>
                    <li className="no-list"><input type="radio" name="radio-btn" id="radio-btn" value="Better Discount" />
                        Better
                        Discount</li>
                </ul>
                <ul className="checkbox-btn-container">
                    <li className="no-list form-heading">Categories</li>
                    <li className="no-list"><input type="checkbox" value="Jersey" /> Jersey</li>
                    <li className="no-list"><input type="checkbox" value="Training Kits" /> Training Kits</li>
                    <li className="no-list"><input type="checkbox" value="Casual Wear" /> Casual Wear</li>
                    <li className="no-list"><input type="checkbox" value="Jackets" /> Jackets</li>
                    <li className="no-list">
                        <input type="checkbox" value="Studs" />
                        Studs
                    </li>
                    <li className="no-list"><input type="checkbox" value="Stocking" /> Stocking</li>
                </ul>

                <ul className="checkbox-btn-container">
                    <li className="no-list form-heading">Brand</li>
                    <li className="no-list"><input type="checkbox" value="Adidas" /> Adidas</li>
                    <li className="no-list"><input type="checkbox" value="Puma" /> Puma</li>
                    <li className="no-list">
                        <input type="checkbox" value="U.S. Polo Assn." /> U.S. Polo Assn.
                    </li>
                    <li className="no-list"><input type="checkbox" value="Woodland" /> Woodland</li>
                    <li className="no-list"><input type="checkbox" value="Bata" /> Bata</li>
                    <li className="no-list"><input type="checkbox" value="Roadster" /> Roadster</li>
                </ul>

                <ul className="checkbox-btn-container">
                    <li className="no-list form-heading">Price</li>
                    <li className="no-list"><input type="checkbox" value="Under ₹1000" /> Under ₹1000</li>
                    <li className="no-list"><input type="checkbox" value="₹1000 to ₹2000" /> ₹1000 to ₹2000</li>
                    <li className="no-list">
                        <input type="checkbox" value="₹2000 to ₹3000" />
                        ₹2000 to ₹3000
                    </li>
                    <li className="no-list">
                        <input type="checkbox" value="₹3000 to ₹4000" />
                        ₹3000 to ₹4000
                    </li>
                    <li className="no-list"><input type="checkbox" value="₹4000 to ₹5000" /> ₹4000 to ₹5000</li>
                    <li className="no-list"><input type="checkbox" value="₹5000+" /> ₹5000+</li>
                </ul>

                <ul className="checkbox-btn-container">
                    <li className="no-list form-heading">Rating</li>
                    <li className="no-list"><input type="checkbox" value="4 and above" /> 4 and above</li>
                    <li className="no-list"><input type="checkbox" value="3 and above" /> 3 and above</li>
                    <li className="no-list"><input type="checkbox" value="2 and above" /> 2 and above</li>
                    <li className="no-list"><input type="checkbox" value="1 and above" /> 1 and above</li>
                </ul>
            </div>
        </section>
    );
};

export {Filters};