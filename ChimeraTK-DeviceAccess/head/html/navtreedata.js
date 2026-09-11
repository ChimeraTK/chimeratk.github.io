/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "ChimeraTK-DeviceAccess", "index.html", [
    [ "First steps", "index.html#first_steps", null ],
    [ "Multi Value Registers (1D Register Accessors)", "accessor1d.html", null ],
    [ "2D Register Accessors", "accessor2d.html", null ],
    [ "Using and creating custom backends", "custom_backends.html", [
      [ "Writing Dummies: Extending the DummyBackend", "custom_backends.html#writing_dummies", null ],
      [ "The Plugin Mechanism", "custom_backends.html#plugin_mechanism", [
        [ "Linking custom backends at compile time (recommended)", "custom_backends.html#linking_backends", null ],
        [ "Loading custom backends at run time", "custom_backends.html#loading_backends", null ],
        [ "Writing your own backed", "custom_backends.html#writing_backends", null ],
        [ "Debian packaging scheme for external backends", "custom_backends.html#backend_packaging_scheme", [
          [ "Usage in the packaging scripts", "custom_backends.html#backend_packaging_usage", null ]
        ] ]
      ] ]
    ] ],
    [ "Data Consistency Group", "data_consistency_group.html", null ],
    [ "Design: AsyncNDRegisterAccessor", "design__async_n_d_register_accessor__numeric_addressed.html", [
      [ "Concept overview", "design__async_n_d_register_accessor__numeric_addressed.html#conceptOverview", [
        [ "AsyncNDRegisterAccessors and the AsyncAccessorManager", "design__async_n_d_register_accessor__numeric_addressed.html#design_AsyncAccessorManager", null ],
        [ "The TriggeredPollDistributor", "design__async_n_d_register_accessor__numeric_addressed.html#design_TriggeredPollDistributor", null ],
        [ "The SubDomain", "design__async_n_d_register_accessor__numeric_addressed.html#design_SubDomain", null ],
        [ "Vision: Using the VariableDistributor DOOCS backend", "design__async_n_d_register_accessor__numeric_addressed.html#design_envisioned_DoocsDistributor", null ]
      ] ],
      [ "The AsyncNDRegisterAccessor and the AsyncAccessorManager", "design__async_n_d_register_accessor__numeric_addressed.html#design_AsyncNDRegisterAccessor", [
        [ "Design decisions and implementation details", "design__async_n_d_register_accessor__numeric_addressed.html#AsyncNDRegisterAccessor_details", null ],
        [ "Exception handling", "design__async_n_d_register_accessor__numeric_addressed.html#AsyncNDRegisterAccessor_exceptions", null ],
        [ "Interface for implementing backends", "design__async_n_d_register_accessor__numeric_addressed.html#AsyncNDRegisterAccessor_usage", null ]
      ] ],
      [ "Implementation in the NumericAddressedBackend", "design__async_n_d_register_accessor__numeric_addressed.html#design_async_NumericAddressedBackend", [
        [ "Asynchronous registers in the map file", "design__async_n_d_register_accessor__numeric_addressed.html#design_async_map_file", [
          [ "Canonical interrupt names", "design__async_n_d_register_accessor__numeric_addressed.html#design_async_canonical_interrupt_name", null ]
        ] ]
      ] ]
    ] ],
    [ "Device Mapping", "dmap.html", [
      [ "CimeraTK device descriptor", "dmap.html#The", null ]
    ] ],
    [ "Exceptions and recovery", "exceptions.html", [
      [ "Exceptions", "exceptions.html#Exceptions", null ],
      [ "isFunctional()", "exceptions.html#isFunctional", null ],
      [ "Recovery", "exceptions.html#recovery", [
        [ "Recovery on re-open", "exceptions.html#recover_open", null ],
        [ "Automatic recovery", "exceptions.html#auto_recover", null ],
        [ "No recovery necessary", "exceptions.html#no_recovery", null ]
      ] ]
    ] ],
    [ "JMAP map file format", "jmap.html", [
      [ "Fundamental concepts", "jmap.html#jmap_fundamentals", [
        [ "Comments", "jmap.html#jmap_comments", null ]
      ] ],
      [ "Register entry", "jmap.html#jmap_register", [
        [ "Address", "jmap.html#jmap_address", null ],
        [ "Access", "jmap.html#jmap_access", null ],
        [ "Number of elements and bytes per element", "jmap.html#jmap_elements", null ],
        [ "Representation", "jmap.html#jmap_representation", null ],
        [ "Description and engineering unit", "jmap.html#jmap_description", null ]
      ] ],
      [ "Modules and hierarchical names", "jmap.html#jmap_modules", [
        [ "Modules", "jmap.html#jmap_simple_modules", null ],
        [ "Address inheritance", "jmap.html#jmap_address_inheritance", null ]
      ] ],
      [ "Advanced features", "jmap.html#jmap_advanced", [
        [ "Interrupts", "jmap.html#jmap_interrupts", null ],
        [ "2D multiplexed registers", "jmap.html#jmap_2d", [
          [ "Channel slices", "jmap.html#jmap_channel_slices", null ],
          [ "Channel tabs", "jmap.html#jmap_channel_tabs", null ]
        ] ],
        [ "Double buffering", "jmap.html#jmap_double_buffering", null ],
        [ "Bit fields", "jmap.html#jmap_bitfields", null ]
      ] ],
      [ "Metadata", "jmap.html#jmap_metadata", null ],
      [ "See also", "jmap.html#jmap_references", null ]
    ] ],
    [ "Logical Name Mapping Backend", "lmap.html", [
      [ "CDD syntax", "lmap.html#cdd", null ],
      [ "Map file syntax", "lmap.html#map", [
        [ "Variables and constants", "lmap.html#variables_and_constants", null ],
        [ "Self-referencing redirects", "lmap.html#internal_redirect", null ]
      ] ],
      [ "Accessor plugins", "lmap.html#plugins", [
        [ "List of plugins", "lmap.html#plugins_reference", [
          [ "multiply", "lmap.html#plugins_reference_multiply", null ],
          [ "math", "lmap.html#plugins_reference_math", null ],
          [ "forceReadOnly", "lmap.html#plugins_reference_force_read_only", null ],
          [ "forcePollingRead", "lmap.html#plugins_reference_force_polling_read", null ],
          [ "monostableTrigger", "lmap.html#plugins_reference_monostable_trigger", null ],
          [ "typeHintModifier", "lmap.html#plugins_reference_type_hint_modifier", null ],
          [ "Double Buffering plugin for the Logical Name Mapper", "lmap.html#double_buffering_plugin", null ],
          [ "bitRange", "lmap.html#plugins_reference_bit_range", null ]
        ] ],
        [ "tagModifier", "lmap.html#plugins_reference_tag_modifier", null ],
        [ "isStatusOutput", "lmap.html#plugins_reference_is_status_output", null ],
        [ "hasReverseRecovery", "lmap.html#plugins_reference_is_reverse_recovery", null ],
        [ "fanOut", "lmap.html#plugins_reference_fanout", null ]
      ] ]
    ] ],
    [ "Basic Example", "basic_example.html", null ],
    [ "Accessing numeric-addressed registers without a map file", "numeric_addresses.html", null ],
    [ "Questions and Answers", "q_and_a.html", [
      [ "Why do RegisterAccessors not have an assignment operator for other RegisterAccessors?", "q_and_a.html#why_no_accessor_assignment", [
        [ "Details:", "q_and_a.html#q_and_a_details", null ]
      ] ],
      [ "Why can I not read SEQUENCE registers?", "q_and_a.html#use_sequences", null ]
    ] ],
    [ "Technical specification: Mapping of DataConsistencyKeys to VersionNumbers V0.0WIP", "spec__data_consistency_key_mapping.html", null ],
    [ "Technical specification DeviceBackend", "spec__device_backend.html", null ],
    [ "Technical specification: TransferElement V1.2", "spec__transfer_element.html", null ],
    [ "Testing applications using the DummyBackends", "testing_with_dummy_backends.html", [
      [ "Specifying the dummies in the device map file", "testing_with_dummy_backends.html#dmap_specify_dummies", null ],
      [ "Writeing to read-only registers", "testing_with_dummy_backends.html#dummy_backends_write_readonly", null ]
    ] ],
    [ "Using push-type inputs with AccessMode::wait_for_new_data", "wait_for_new_data.html", null ],
    [ "XDMA backend", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2xdma__backend.html", [
      [ "Prerequisites", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2xdma__backend.html#autotoc_md17", null ],
      [ "Mapping of XDMA driver interfaces", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2xdma__backend.html#autotoc_md18", [
        [ "AXI-Lite Master interface", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2xdma__backend.html#autotoc_md19", null ],
        [ "AXI MM DMA interface", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2xdma__backend.html#autotoc_md20", null ],
        [ "Interrupt lines (events)", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2xdma__backend.html#autotoc_md21", null ]
      ] ]
    ] ],
    [ "Todo List", "todo.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Concepts", "concepts.html", "concepts" ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Related Symbols", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Macros", "globals_defs.html", "globals_defs" ]
      ] ]
    ] ],
    [ "Examples", "examples.html", "examples" ]
  ] ]
];

var NAVTREEINDEX =
[
"_access_mode_8cc.html",
"_l_n_m_backend_bit_accessor_8cc.html#a8c9f67bf29e708e827da1dcb0376dcf0",
"_sub_domain_8h_source.html",
"accessor2_d__multiplexed_8cpp.html#ae66f6b31b5ad750f1fe042a706a4e3d4",
"class_chimera_t_k_1_1_backend_register_info_base.html#a85ece0fd9d481d869e938261bd21b2b8",
"class_chimera_t_k_1_1_data_descriptor.html#af3be571231a41e3600c1143c7162a951ab45cffe084dd3d20d928bee85e7b0f21",
"class_chimera_t_k_1_1_device_info_map.html#ad1f7f2c18898d4efe2b99c2a801d218f",
"class_chimera_t_k_1_1_dummy_multiplexed_register_accessor.html#a58fdeefd616374e2ba3314b97eeca635",
"class_chimera_t_k_1_1_l_n_m_backend_1_1_bit_range_access_plugin.html#ad9536e31b89c9320187dc57715282af7",
"class_chimera_t_k_1_1_l_n_m_backend_channel_accessor.html#a1a5dbcabd62608869c651225d3e94e4a",
"class_chimera_t_k_1_1_map_file_parser.html",
"class_chimera_t_k_1_1_numeric_addressed_backend_a_s_c_i_i_accessor.html#ac570409506f53dfd39fec1bb114817bf",
"class_chimera_t_k_1_1_numeric_addressed_register_info.html#aa73f25b920881507fb0081850ac5c9eb",
"class_chimera_t_k_1_1_rebot_backend.html#a7835c507785e12ce3d1bb75845f11069",
"class_chimera_t_k_1_1_scalar_register_accessor.html#a0b2bf6cba3d173e3d31d6741f0eafa31",
"class_chimera_t_k_1_1_subdevice_register_window_accessor.html#a5d55ee1035d0092fcbe19d9de110ccf0",
"class_chimera_t_k_1_1_transfer_element_abstractor.html#afb6356a39bcb73ef14cfa3b609576def",
"class_chimera_t_k_1_1_type_changing_direct_cast_decorator_3_01std_1_1string_00_01_i_m_p_l___t_01_4.html",
"class_chimera_t_k_1_1_unified_backend_test.html#aec963603aa9e175674288ec4efa9cadf",
"class_chimera_t_k_1_1async_1_1_domain_impl.html",
"class_chimera_t_k_1_1async_1_1_variable_distributor.html#a300869db078efc693ffd123ec6f62c33",
"class_pcie_backend_test.html#a3ac8298d3a88e08f9f67b5039c56d565",
"functions_func_~.html",
"namespace_chimera_t_k.html#a563a28dc0406910d68b5b5beaa4cbd3c",
"pcieuni__io__compat_8h.html",
"struct_chimera_t_k_1_1_dummy_backend_1_1_address_range.html",
"struct_chimera_t_k_1_1_l_n_m_backend_1_1_undecorated_params.html#af339dfb7c8a425dff7a7d949bcc1f9dd",
"struct_chimera_t_k_1_1_unified_backend_test_1_1force_async_read_inconsistency__proxy__helper.html",
"struct_fixture.html#aaa666e629f57793511fcd0716c3b84c6",
"struct_my_area1.html#a1f1998eec28e954bad1c2979e968186a",
"struct_reg_full_area_scaled.html#af68910dde0d9398d343ae911bbfd9e8d",
"struct_scalar_descriptor.html#aab790c293ad45c4da2aad06b9732a312",
"structdevice__ioctrl__dma.html#a5a0d83ddd73923f03a31b8ea3357eea4",
"test_json_map_file_parser_8cpp_source.html",
"test_raw_converter_8cpp.html#a139f00d2466d591f60b8d6a73c8273f1",
"test_transfer_group_8cpp.html#a0b51429ef8f672e7d28e37c2f14f5a4c"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';