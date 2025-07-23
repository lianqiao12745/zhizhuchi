/* 
* @Author: Changmeng Hu
* @Date:   2019-05-22 20:51:29
* @Last Modified by:   Changmeng Hu
* @Last Modified time: 2019-05-23 10:03:10
*/

/*
 * Let's begin with validation functions
 */
 jQuery.extend(jQuery.fn, {
    /*
     * check if field value lenth more than 3 symbols ( for name and comment ) 
     */
    validate: function () {
        if (jQuery(this).val().length < 3) {jQuery(this).addClass('error');return false} else {jQuery(this).removeClass('error');return true}
    },
    /*
     * check if email is correct
     * add to your CSS the styles of .error field, for example border-color:red;
     */
    validateEmail: function () {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
            emailToValidate = jQuery(this).val();
        if (!emailReg.test( emailToValidate ) || emailToValidate == "") {
            jQuery(this).addClass('error');return false
        } else {
            jQuery(this).removeClass('error');return true
        }
    },
});
 
jQuery(function($){
 
    /*
     * On comment form submit
     */
    $( '#commentform' ).submit(function(){
 
        // define some vars
        var button = $('#submit'), // submit button
            respond = $('#respond'), // comment form container
            commentlist = $('.comment-list'), // comment list container
            cancelreplylink = $('#cancel-comment-reply-link');
 
        // if user is logged in, do not validate author and email fields
        if( $( '#author' ).length )
            $( '#author' ).validate();
 
        if( $( '#email' ).length )
            $( '#email' ).validateEmail();
 
        // validate comment in any case
        $( '#comment' ).validate();
 
        // if comment form isn't in process, submit it
        if ( !button.hasClass( 'loadingform' ) && !$( '#author' ).hasClass( 'error' ) && !$( '#email' ).hasClass( 'error' ) && !$( '#comment' ).hasClass( 'error' ) ){
 
            // ajax request
            $.ajax({
                type : 'POST',
                url : wpkj_ajax_comment_params.ajaxurl, // admin-ajax.php URL
                data: $(this).serialize() + '&action=ajaxcomments', // send form data + action parameter
                beforeSend: function(xhr){
                    // what to do just after the form has been submitted
                    button.addClass('loadingform').val( wpkj_ajax_comment_params.loading );
                },
                error: function (request, status, error) {
                    if( status == 500 ){
                        alert( wpkj_ajax_comment_params.error_500 );
                    } else if( status == 'timeout' ){
                        alert( wpkj_ajax_comment_params.error_timeout );
                    } else {
                        // process WordPress errors
                        var wpErrorHtml = request.responseText.split("<p>"),
                            wpErrorStr = wpErrorHtml[1].split("</p>");
 
                        alert( wpErrorStr[0] );
                    }
                },
                success: function ( addedCommentHTML ) {
 
                    // if this post already has comments
                    if( commentlist.length > 0 ){
 
                        // if in reply to another comment
                        if( respond.parent().hasClass( 'comment' ) ){
 
                            // if the other replies exist
                            // if( respond.parent().children( '.children' ).length ){  
                            //     respond.parent().children( '.comment-respond' ).before( addedCommentHTML );
                            // } else {
                                // if no replies, add <ol class="children">
                                addedCommentHTML = '<ol class="children new-comment">' + addedCommentHTML + '</ol>';
                                respond.parent().children( '.comment-respond' ).before( addedCommentHTML );
                            // }
                            // close respond form
                            cancelreplylink.trigger("click");
                        } else {
                            // simple comment
                            commentlist.append( addedCommentHTML );
                        }
                    }else{
                        // if no comments yet
                        addedCommentHTML = '<ol class="comment-list">' + addedCommentHTML + '</ol>';
                        respond.before( $(addedCommentHTML) );
                    }
                    // clear textarea field
                    $('#comment').val('');
                },
                complete: function(){
                    // what to do after a comment has been added
                    button.removeClass( 'loadingform' ).val( wpkj_ajax_comment_params.post_comment );
                }
            });
        }
        return false;
    });
});


jQuery(function($){
 
    // load more button click event
    $('.wpkj-comment-loadmore span').click( function(){
        var button = $(this);
 
        // decrease the current comment page value
        cpage--;
 
        $.ajax({
            url : ajaxurl, // AJAX handler, declared before
            data : {
                'action': 'cloadmore', // wp_ajax_cloadmore
                'post_id': parent_post_id, // the current post
                'cpage' : cpage, // current comment page
            },
            type : 'POST',
            beforeSend : function ( xhr ) {
                button.text( wpkj_ajax_comment_params.loading ); // preloader here
            },
            success : function( data ){
                if( data ) {
                    $('ol.comment-list').append( data );
                    button.text( wpkj_ajax_comment_params.more_comment ); 
                     // if the last page, remove the button
                    if ( cpage == 1 )
                        button.remove();
                } else {
                    button.remove();
                }
            }
        });
        return false;
    });
 
});