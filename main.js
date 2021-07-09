var request= require('request');
var cheerio= require('cheerio');
var fs=require('fs');
var URL= require('url-parse');
 var StartingIndex=120406;
 var EndingIndex=120433;
var pagesToCrawl=[];
var startcode='16JM';
var numPagesVisited;
var pagesVisited={};
var indexes=StartingIndex;
var options={
url:'',
headers:{
    'User-Agent':'Reso-fam'
      }
}
 SettingPagesToCrawl();
function SettingPagesToCrawl(){

for(i=0;i<(EndingIndex-StartingIndex)+1;i++){
  pagesToCrawl.push('http://admin.edushoppee.com/upload_docs/doubt_solution_bulk/'+startcode+indexes+'.jpg');
  var file= startcode+indexes+'.jpg';
  indexes++;
  crawl(pagesToCrawl[i],file);
}
  
}


function SetUrlHeader(anyUrl)
{
    console.log('settingheaders');
    options.url=anyUrl;
}


function crawl(nextPage,filename)
{
    console.log('crawl');
  SetUrlHeader(nextPage);

request(options,function(error,response,body) {
    if(error)
    {
        throw error;
        console.log(error);
    }
   request(nextPage).pipe(fs.createWriteStream(filename));

})
    }

