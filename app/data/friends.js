// DATA
// Array of potential friends data objects. User input will be matched against this data set

var tableArray = [
    {
      name: "John",
      photo: "https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwNC84MTkvb3JpZ2luYWwvY3V0ZS1raXR0ZW4uanBn",
      scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1] 
    }, 
    {
      name: "Jane",
      photo: "https://www.catster.com/wp-content/uploads/2018/05/A-gray-cat-crying-looking-upset.jpg",
      scores: [3, 2, 2, 4, 5, 1, 2, 5, 4, 3] 
    },
    {
      name: "Joe",
      photo: "https://www.broadsheet.com.au/media/cache/6c/8b/6c8b1577b91215610644d49777e3ee63.jpg",
      scores: [1, 2, 3, 4, 5, 1, 2, 5, 4, 1] 
    },
    {
      name: "Ella",
      photo: "https://www.sciencenews.org/sites/default/files/2018/08/main/articles/082918_lh_crispr-beagles_feat_REV.jpg",
      scores: [3, 2, 1, 4, 5, 2, 2, 5, 4, 1] 
    },
    {
      name: "Anna",
      photo: "https://cdn.psychologytoday.com/sites/default/files/styles/image-article_inline_full/public/field_blog_entry_images/2018-03/jaclou_contons_dodged_to_lighten.jpg?itok=f96PbcnB",
      scores: [3, 2, 3, 4, 5, 1, 3, 5, 4, 1] 
    }
  ];
  
  // Export the array, to make it accessible to other files using require.
  module.exports = tableArray;
  