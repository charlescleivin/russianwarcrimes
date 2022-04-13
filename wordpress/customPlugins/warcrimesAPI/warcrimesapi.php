<?php
/** Plugin Name: Warcrimes API **/

function get_allwarcrimes() {

    $args = array(
        'post_type' => 'warcrime',
        'posts_per_page' => -1,      
        'orderby' => 'date',
        'order' => 'DESC'
    );

    $posts = get_posts($args);

    $data = [];
    $i = 0;

    foreach($posts as $post) {
        $data[$i]['id'] = $post->ID;
        $data[$i]['title'] = $post->post_title;
        $data[$i]['content'] = $post->post_content;
        $data[$i]['date'] = $post->post_date;
        $data[$i]['thumbnail'] = get_the_post_thumbnail_url($post->ID);
        $data[$i]['link'] = get_permalink($post->ID);
        $i++;
    };

    return $data;
};

function get_xwarcrimes($numberofwarcrimes = null, $skip = null) {

     $args = array(
        'post_type' => 'warcrime',
        'posts_per_page' => $numberofwarcrimes['numberofwarcrimes'],      
        'orderby' => 'date',
        'order' => 'DESC',
        'offset' => $numberofwarcrimes['skip']
    );

    $posts = get_posts($args);

    $data = [];
    $i = 0;

    foreach($posts as $post) {
        $data[$i]['id'] = $post->ID;
        $data[$i]['title'] = $post->post_title;
        $data[$i]['content'] = $post->post_content;
        $data[$i]['date'] = $post->post_date;
        $data[$i]['thumbnail'] = get_the_post_thumbnail_url($post->ID);
        $data[$i]['link'] = get_permalink($post->ID);
        $data[$i]['date-log-group'] =  get_post_meta($post ->ID, 'date-log-group');
        $data[$i]['location-and-time-of-warcrime'] =  get_post_meta($post ->ID, 'location-and-time-of-warcrime');
        $data[$i]['sources-group'] =  get_post_meta($post ->ID, 'sources-group');
        $data[$i]['evidence-group'] =  get_post_meta($post ->ID, 'evidence-group');         
       
        $i++;
    };


    return $data;
};

function get_image($imageId){
    $image = wp_get_attachment_image_url($imageId['imageId']);
    return $image;
}

add_action( 'rest_api_init', function() {
    register_rest_route( 'warcrimesapi/v1', '/allwarcrimes', [
        'methods' => 'GET',
        'callback' => 'get_allwarcrimes',
    ]);
    register_rest_route( 'warcrimesapi/v1', '/warcrimes/numberofwarcrimes=(?P<numberofwarcrimes>[0-9-]+)&skip=(?P<skip>[0-9-]+)', [
        'methods' => 'GET',
        'callback' => 'get_xwarcrimes',
    ]);
        register_rest_route( 'warcrimesapi/v1', '/warcrimes/image=(?P<imageId>[0-9-]+)', [
        'methods' => 'GET',
        'callback' => 'get_image',
    ]);
});


?>