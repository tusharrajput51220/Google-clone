import React from 'react'
import './Searchpage.css'
import { useStateValue } from './StateProvider'
// import useGoogleSearch from './useGoogleSearch'
import response from './response'
import {Link} from 'react-router-dom'
import Search from './Search'
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Searchpage() {
    const [{ term }, dispatch]=useStateValue()
    // const { data }=useGoogleSearch(term)
    // console.log("Hello", data)
    const data = response
  return (
    <div className='searchPage'>
        <div className='searchPage_header'>
          <Link to="/">
            <img className="searchPage_logo"
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
              alt=""
            />
          </Link>
          <div className='searchPage_headerBody'>
            <Search hidebuttons />
            <div className='searchPage_options'>
              <div className='searchPage_optionsLeft'>
                <div className='searchPage_option'>
                  <SearchIcon />
                  <Link to='/all'>All</Link>
                </div>
                <div className='searchPage_option'>
                  <DescriptionIcon />
                  <Link to='/news'>News</Link>
                </div>
                <div className='searchPage_option'>
                  <ImageIcon />
                  <Link to='/images'>Images</Link>
                </div>
                <div className='searchPage_option'>
                  <LocalOfferIcon />
                  <Link to='/shopping'>Shopping</Link>
                </div>
                <div className='searchPage_option'>
                  <RoomIcon />
                  <Link to='/maps'>Maps</Link>
                </div>
                <div className='searchPage_option'>
                  <MoreVertIcon />
                  <Link to='/more'>More</Link>
                </div>
              </div>
              <div className='searchPage_optionsRight'>
                <div className='searchPage_option'>
                  <Link to='/settings'>Settings</Link>
                </div>
                <div className='searchPage_option'>
                  <Link to='/tools'>Tools</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* <div className='searchPage_results'></div> */}
        {true && (
          <div className='searchPage_results'>
            <p className='searchPage_resultCount'>
              About {data?.searchInformation.formattedTotalResults} results
              ({data?.searchInformation.formattedSearchTime} seconds)
              for {term} 
            </p>
            {data?.queries.request.map(item => (
              <React.Fragment key={item.id}>
                <div className='searchPage_result'>
                <img className='searchPage_image' src='/image.jpeg' /> 
                <a href='www.google.com'>{item.title}</a><br />
                <a className='searchPage_resultTitle' href='www.google.com'>
                  Tesla: Electric cars of new generation
                </a>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac turpis euismod, interdum purus nec, aliquet ligula. Quisque tincidunt, justo ac euismod laoreet, ligula est ultricies libero, vel facilisis purus risus sit amet justo. Maecenas ac tincidunt libero. Vestibulum bibendum mauris vel ex imperdiet, sit amet congue neque vestibulum. Aliquam erat volutpat. Ut id aliquet libero. Nullam nec fermentum felis. Integer volutpat aliquet nisi, sit amet luctus sapien gravida id. Vestibulum at risus eget erat fermentum vulputate.</p>
                <img className='searchPage_image' src='/image.jpeg' /> <a href='www.google.com'>{item.title}</a><br />
                <a className='searchPage_resultTitle' href='www.google.com'>
                  Tesla: The future car of the world
                </a>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac turpis euismod, interdum purus nec, aliquet ligula. Quisque tincidunt, justo ac euismod laoreet, ligula est ultricies libero, vel facilisis purus risus sit amet justo. Maecenas ac tincidunt libero. Vestibulum bibendum mauris vel ex imperdiet, sit amet congue neque vestibulum. Aliquam erat volutpat. Ut id aliquet libero. Nullam nec fermentum felis. Integer volutpat aliquet nisi, sit amet luctus sapien gravida id. Vestibulum at risus eget erat fermentum vulputate.</p>
                <img className='searchPage_image' src='/image.jpeg' /> <a href='www.google.com'>{item.title}</a><br />
                <a className='searchPage_resultTitle' href='www.google.com'>
                  Tesla The Band of the cars evolution
                </a>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac turpis euismod, interdum purus nec, aliquet ligula. Quisque tincidunt, justo ac euismod laoreet, ligula est ultricies libero, vel facilisis purus risus sit amet justo. Maecenas ac tincidunt libero. Vestibulum bibendum mauris vel ex imperdiet, sit amet congue neque vestibulum. Aliquam erat volutpat. Ut id aliquet libero. Nullam nec fermentum felis. Integer volutpat aliquet nisi, sit amet luctus sapien gravida id. Vestibulum at risus eget erat fermentum vulputate.</p>
                <img className='searchPage_image' src='/image.jpeg' /> <a href='www.google.com'>{item.title}</a><br />
                <a className='searchPage_resultTitle' href='www.google.com'>
                  Tesla: the Cool One and the unique one
                </a>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac turpis euismod, interdum purus nec, aliquet ligula. Quisque tincidunt, justo ac euismod laoreet, ligula est ultricies libero, vel facilisis purus risus sit amet justo. Maecenas ac tincidunt libero. Vestibulum bibendum mauris vel ex imperdiet, sit amet congue neque vestibulum. Aliquam erat volutpat. Ut id aliquet libero. Nullam nec fermentum felis. Integer volutpat aliquet nisi, sit amet luctus sapien gravida id. Vestibulum at risus eget erat fermentum vulputate.</p>
                <img className='searchPage_image' src='/image.jpeg' /> <a href='www.google.com'>{item.title}</a><br />
                <a className='searchPage_resultTitle' href='www.google.com'>
                  Tesla: Elon Musk Invention
                </a>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac turpis euismod, interdum purus nec, aliquet ligula. Quisque tincidunt, justo ac euismod laoreet, ligula est ultricies libero, vel facilisis purus risus sit amet justo. Maecenas ac tincidunt libero. Vestibulum bibendum mauris vel ex imperdiet, sit amet congue neque vestibulum. Aliquam erat volutpat. Ut id aliquet libero. Nullam nec fermentum felis. Integer volutpat aliquet nisi, sit amet luctus sapien gravida id. Vestibulum at risus eget erat fermentum vulputate.</p>
                <img className='searchPage_image' src='/image.jpeg' /> <a href='www.google.com'>{item.title}</a><br />
                <a className='searchPage_resultTitle' href='www.google.com'>
                  Tesla: Buy In India
                </a>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac turpis euismod, interdum purus nec, aliquet ligula. Quisque tincidunt, justo ac euismod laoreet, ligula est ultricies libero, vel facilisis purus risus sit amet justo. Maecenas ac tincidunt libero. Vestibulum bibendum mauris vel ex imperdiet, sit amet congue neque vestibulum. Aliquam erat volutpat. Ut id aliquet libero. Nullam nec fermentum felis. Integer volutpat aliquet nisi, sit amet luctus sapien gravida id. Vestibulum at risus eget erat fermentum vulputate.</p>
                <img className='searchPage_image' src='/image.jpeg' /> <a href='www.google.com'>{item.title}</a><br />
                <a className='searchPage_resultTitle' href='www.google.com'>
                  Tesla: Design, color etc.
                </a>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac turpis euismod, interdum purus nec, aliquet ligula. Quisque tincidunt, justo ac euismod laoreet, ligula est ultricies libero, vel facilisis purus risus sit amet justo. Maecenas ac tincidunt libero. Vestibulum bibendum mauris vel ex imperdiet, sit amet congue neque vestibulum. Aliquam erat volutpat. Ut id aliquet libero. Nullam nec fermentum felis. Integer volutpat aliquet nisi, sit amet luctus sapien gravida id. Vestibulum at risus eget erat fermentum vulputate.</p>
                <img className='searchPage_image' src='/image.jpeg' /> <a href='www.google.com'>{item.title}</a><br />
                <a className='searchPage_resultTitle' href='www.google.com'>
                  Tesla: The future of cars
                </a>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac turpis euismod, interdum purus nec, aliquet ligula. Quisque tincidunt, justo ac euismod laoreet, ligula est ultricies libero, vel facilisis purus risus sit amet justo. Maecenas ac tincidunt libero. Vestibulum bibendum mauris vel ex imperdiet, sit amet congue neque vestibulum. Aliquam erat volutpat. Ut id aliquet libero. Nullam nec fermentum felis. Integer volutpat aliquet nisi, sit amet luctus sapien gravida id. Vestibulum at risus eget erat fermentum vulputate.</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        )}
    </div>
  )
}

export default Searchpage







