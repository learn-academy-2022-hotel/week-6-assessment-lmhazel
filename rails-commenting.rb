# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) the class BlogPostsController is being referrenced from the ApplicationController. Then, def index is used to define the method called index, index is typically used to show all items
class BlogPostsController < ApplicationController
  def index
    # ---2) @posts is an instance variable referencing the posts from BlogPost and the method will be displaying all the posts
    @posts = BlogPost.all
  end

  # ---3) the method show uses the instance variable @post to find one item from BlogPost using the .find mehtod which returns the first element from an array which matches the conditions. In this case, it is looking for an object at whatever ID is put in. 
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) The method new is used by referencing @post from BlogPost and using the .new method which will create a form and which will allow the user to add a new post to BlogPost
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) the create method creats an instance variable @post and saves the information that is inputted and adds it to BlogPost. blog_post_params means the item must fulfill whatever specifications that were predetermined. The conditional statement after checks if this data matches the specifications and if it does, they are passed along to blog_post_path.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) the edit method creeates an instance variable @post which referrences BlogPost and uses the find method to return whatever item is at the ID. This will be used to edit later. The update method does the same however...
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) the update method then uses the update method to update an object at the ID from above and then based on if the item matches the speficiations from blog_post_params, then the @post instance variable will be saved to the database. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) the destroy method creates an instance variable @post from BlogPost and uses the find method to return whatever is at the ID. The destroy method deletes what was returned and takes the uses back to blog_posts_path. 
      redirect_to blog_posts_path
    end
  end

  # ---9) Private means that the method following it will only be used internally and not show anything to the user. 
  private
  def blog_post_params
    # ---10) the method blog_post_params is used to specify what is required for inputted data to be valid. In this case. a title and content are needed. 
    params.require(:blog_post).permit(:title, :content)
  end
end
