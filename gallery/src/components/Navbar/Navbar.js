import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchField from 'react-search-field';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className="row1">
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Asia
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className='nav-menu1'>
            <button className='btn'>تواصل معنا</button>
            <SearchField className="search" placeholder='ابحث عن اسم المنتج...'/>
          </ul>
        </div>
        
        <nav className='navbar1'>
          <div className="container5">
            <ul className="menu-main">
              <li>
                <Link to="#"> 
                  <i className="fas fa-shopping-cart"></i>
                </Link>
              </li>
            
              <li>
                <Link to="#"> 
                  <i class="fab fa-instagram"></i>
                </Link>
              </li>

              <li>
                <Link to="#"> 
                  <i class="fab fa-linkedin-in"></i>
                </Link>
              </li>
            
              <li>
                <Link to="#"> 
                  <i class="fab fa-facebook-f"></i>
                </Link>
              </li>

              <li>
                <a href="TEL: +97092388700">
                  123-456-7890
                </a>
              </li>
            
              <li>
                <a href="mailto: asia2020@hotmail.com">
                  asia2020@hotmail.com
                </a>
              </li>

            <li style={{marginRight:"200px"}}></li>

            <li><Link to="/kids"><i className='fas fa-caret-down' /> قسم الاطفال </Link>
                  <div className="menu-sub">                             

                    <div className="menu-col-1">
                      <Link to="/kids-clothing"><h3 className="menu-category">قسم الملابس</h3></Link>
                        <ul>
                          <li><Link to="/girl-clothing">ملابس بناتي</Link></li>
                          <li><Link to="/kids-clothing">ملابس ولادي</Link></li>
                        </ul>
                    </div>
                    <div className="menu-col-1">
                      <Link to="/kids-bags-accessories"><h3 className="menu-category">قسم الشنط و الاكسسوارات</h3></Link>
                        <ul>
                          <li><Link to="/girl-bags">شنط بناتي</Link></li>
                          <li><Link to="/boy-bags">شنط ولادي</Link></li>
                          <li><Link to="/girl-accessories">اكسسوارات</Link></li>
                        </ul>
                    </div>
                    <div className="menu-col-1">  
                      <Link to="/kids-shoses"><h3 className="menu-category">قسم الأحذية</h3></Link>
                        <ul>
                          <li><Link to="/girl-shoses">أحذية بناتي</Link></li>
                          <li><Link to="/boy-shoses">أحذية ولادي</Link></li>
                        </ul>
                    </div>
                  </div>
              </li>
              <li><Link to="/men"><i className='fas fa-caret-down' /> قسم الرجال </Link>
                  <div className="menu-sub">           
                    <div className="menu-col-1">
                      <Link to="/men-clothing"><h3 className="menu-category">قسم الملابس</h3></Link>
                        <ul>
                          <li><Link to="/men-trousers-jeans">بناطيل جينز</Link></li>
                          <li><Link to="/men-casual-pants">بناطيل كاجوال</Link></li>
                          <li><Link to="/men-sport-pants">بناطيل رياضية</Link></li>
                          <li><Link to="/men-shorts">شورتات</Link></li>
                          <li><Link to="/men-shirts">قمصان</Link></li>
                          <li><Link to="/men-t-shirts">بلايز</Link></li>
                          <li><Link to="/men-coats-jackets">جاكيتات و معاطف</Link></li>
                          <li><Link to="/men-pajamas">بيجامات</Link></li>
                          <li><Link to="/men-sportswear">ملابس رياضية</Link></li>
                          <li><Link to="/men-underwears">ملابس داخلية</Link></li>
                        </ul>
                     </div>

                    <div className="menu-col-1">
                        <Link to="/men-watches"><h3 className="menu-category">قسم الساعات</h3></Link>
                        <ul>
                          <li><Link to="/men-leather-watches">ساعات جلدية</Link></li>
                          <li><Link to="/men-metal-watches">ساعات معدنية</Link></li>
                        </ul>
                   
                      <Link to="/men-wallets-accessories"><h3 className="menu-category">قسم المحافظ و الاكسسوارات</h3></Link>
                        <ul>
                          <li><Link to="/men-wallets">محافظ</Link></li>
                          <li><Link to="/men-accessories">اكسسوارات</Link></li>
                        </ul>
                    </div>
                    
                    <div className="menu-col-1">
                      <Link to="/men-shoses"><h3 className="menu-category">قسم الأحذية</h3></Link>
                        <ul>
                          <li><Link to="/men-sport">أحذية رياضية</Link></li>
                          <li><Link to="/men-boots">بساطير</Link></li>
                          <li><Link to="/men-medic-shoes">أحذية طبية</Link></li>
                          <li><Link to="/men-formal-classic-shoes">رسمية</Link></li>
                          <li><Link to="/men-casual">كاجوال</Link></li>
                        </ul>
                      
                      <Link to="/men-perfume"><h3 className="menu-category">قسم العطور</h3></Link>
                        <ul>
                          <li><Link to="/men-perfume">عطور</Link></li>
                        </ul>
                    </div>
                  </div>
              </li>

              <li><Link to="/women"><i className='fas fa-caret-down' /> قسم النساء </Link>
                  <div className="menu-sub">           
                    <div className="menu-col-1">
                      <Link to="/women-beauty-health"><h3 className="menu-category">قسم الجمال</h3></Link>
                        <ul>
                          <li><Link to="/women-face-makeup">مكياج الوجه</Link></li>
                          <li><Link to="/women-eyes-makeup">مكياج العيون</Link></li>
                          <li><Link to="/women-lips-makeup">مكياج الشفاه</Link></li>
                          <li><Link to="/women-hair-care">العناية بالشعر</Link></li>
                          <li><Link to="/women-nail-polish">العناية بالاظافر</Link></li>
                          <li><Link to="/women-body-care">العناية بالجسم</Link></li>
                        </ul>
                        
                        <Link to="/women-watches"><h3 className="menu-category">قسم الساعات</h3></Link>
                        <ul>
                          <li><Link to="/women-leather-watches">ساعات جلدية</Link></li>
                          <li><Link to="/metal-watches">ساعات معدنية</Link></li>
                        </ul>
                    </div>
                    
                    <div className="menu-col-1">
                      <Link to="/women-clothing"><h3 className="menu-category">قسم الملابس</h3></Link>
                        <ul>
                          <li><Link to="/women-coats-jackets">جاكيتات و معاطف</Link></li>
                          <li><Link to="/women-blouses-shirts">بلايز و قمصان</Link></li>
                          <li><Link to="/women-pajamas">بيجامات</Link></li>
                          <li><Link to="/women-pants-trousers">بناطيل</Link></li>
                          <li><Link to="/women-home-outfit">ملابس بيتية</Link></li>
                          <li><Link to="/women-lingerie-underwear">ملابس داخلية</Link></li>
                        </ul>
                      
                      <Link to="/women-bags-accessories"><h3 className="menu-category">قسم الشنط و الاكسسوارات</h3></Link>
                        <ul>
                          <li><Link to="/women-bags">شنط</Link></li>
                          <li><Link to="/women-accessories">اكسسوارات</Link></li>
                        </ul>
                    </div>

                    <div className="menu-col-1">
                      <Link to="/women-shoses"><h3 className="menu-category">قسم الأحذية</h3></Link>
                        <ul>
                          <li><Link to="/women-sport">أحذية رياضية</Link></li>
                          <li><Link to="/women-boots">جزم</Link></li>
                          <li><Link to="/women-bustar">بساطير</Link></li>
                          <li><Link to="/women-rocky-heel">روكي و كعب</Link></li>
                          <li><Link to="/women-medic-shoes">أحذية طبية</Link></li>
                          <li><Link to="/women-ballet-and-crawler">باليه و زحاف</Link></li>
                          <li><Link to="/women-casual">كاجوال</Link></li>
                        </ul>
                      
                      <Link to="/women-perfume"><h3 className="menu-category">قسم العطور </h3></Link>
                        <ul>
                          <li><Link to="/women-perfume">عطور</Link></li>
                        </ul>
                    </div>
                  </div>
              </li>              

            <li><Link to="/shop">تسوق</Link></li>
            <li><Link to="/">الصفحة الرئيسية</Link></li>
          </ul>
      </div>

    </nav>
      </nav>
    </>
  );
}

export default Navbar;

/*
<Link to="/beauty-health"><h3 class="menu-category">قسم الجمال</h3></Link>
                        <ul>
                          <li><Link to="/"></Link></li>
                          <li><Link to="/"></Link></li>
                          <li><Link to="/"></Link></li>
                          <li><Link to="/"></Link></li>
                          <li><Link to="/"></Link></li>
                          <li><Link to="/"></Link></li>
                        </ul>
*/